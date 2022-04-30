<?php

    include_once 'database.php';
    require_once 'PHPMailer.php';
    require_once 'SMTP.php';
    //require_once 'Exception.php';

    if (isset($_POST['email'])) {
        $server = new ConnectionServer();
        $conexion = $server->getConnection();
        $correo = strip_tags($_POST['email']);
        $sql = "SELECT * FROM usuarios WHERE email='$correo'";
        $result = mysqli_query($conexion, $sql);
        $contar = mysqli_num_rows($result);


        if ($contar == 1){

        
            $datos = mysqli_fetch_array($result, MYSQLI_ASSOC);

            //Creacion de token
            $id = $datos["uid"];
            $nombre = $datos["nombre"];
            $apellidos = $datos["apellidos"];
            $token = base64_encode(sha1(uniqid(rand(), true)));

            // echo $nombre;

            try{
                $actualizar = "UPDATE usuarios SET token ='$token' WHERE email='$correo'";

                // echo $actualizar;

                $resultado = mysqli_query($conexion, $actualizar);

                $mail = new PHPMailer(true);
                //Server settings
                $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'discco90@gmail.com';                     //SMTP username
                $mail->Password   = 'Elmilenio2llego';                               //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                //Recipients
                $mail->setFrom('discco90@gmail.com', 'Medtech');
                $mail->addAddress($correo, $nombre);     //Add a recipient
                /* $mail->addAddress('ellen@example.com');               //Name is optional
                $mail->addReplyTo('info@example.com', 'Information');
                $mail->addCC('cc@example.com');
                $mail->addBCC('bcc@example.com'); */

                //Attachments
                /* $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name */

                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'Recuperar Password en Medtech';
                $mail->Body    = '<h3>Para recuperar tu password en <a href="http://localhost/medtech/index.html">Medtech</a> debes seguir las siguientes indicaciones:</h3>  <div align="center"><img src="https://i.imgur.com/RB69BaG.png" alt="Imagen de Bienvenida" width="600" height="165"></div>    <b><ul><li>Dale Click al Enlace: <b> <a href="http://localhost/medtech/new_password.php?token='.$token.'">Aqui.</a> </b> </li><li>Guarda Tu Nueva Contraseña en el Sitio</li><li>Inicia Sesión Nuevamente</li></ul></b>';
                $mail->AltBody = 'Este es un correo de Medtech para recuperar tu contraseña';

                $mail->send();
                echo "Message has been sent";
    
            }catch(Exception $e) {
                // echo "Algo ha salido mal";
            }
            $server->closeConnection();
        }else{
            $server->closeConnection();
        }
    }

?>
