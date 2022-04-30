$(document).ready(()=>{

    $('#singin').click(()=>{
        let email = $("#email").val();
        let password = $("#password").val();
        let datos = 'email='+email+'&password='+password;
        if ($.trim(email).length > 0 && $.trim(password).length > 0){
            $.ajax({
                type: "POST",
                url: "funciones_php/logina.php",
                data: datos,
                beforeSend: () => {
                    $('#respuesta').html('<span style="color:orange";>Cargando...</>');
                },
                success: (response)=>{
                    if(response){
                        $('#respuesta').html(
                            '<span style="color:green";>Correcto, redirigiendo...</>'
                        );
                        setTimeout(() => {
                            window.location.href = 'admin/index.php';
                        }, 2000);
                    }else{
                        $('#respuesta').html(
                            '<span style="color:orange";>Email or Password Wrong</>'
                        );
                        setTimeout(() => {
                            $('#respuesta').html('copy; 2017-2021')
                        }, 4000);
                    }
                }
            })
        }else{
            $('#respuesta').html("<span style='color:#cc0000;'>Error, email o password no correctos.</span>")
        }
    });


    $('#emailing').click(()=>{
        let email = $("#email").val();
        let datos = 'email='+email;
        if ($.trim(email).length > 0){
            $.ajax({
                type: "POST",
                url: "funciones_php/recuperara.php",
                data: datos,
                beforeSend: () => {
                    $('#respuesta').html('<span style="color:orange";>Enviando correo...</>');
                },
                success: (response)=>{
                    if(response){
                        $('#respuesta').html(
                            '<span style="color:green";>Correo enviado. Revisa tu Correo</>'
                        );
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 4000);
                    }else{
                        $('#respuesta').html(
                            '<span style="color:orange";>Email no Registrado</>'
                        );
                        setTimeout(() => {
                            $('#respuesta').html('copy; 2017-2021')
                        }, 4000);
                    }
                }
            })
        }else{
            $('#respuesta').html("<span style='color:#cc0000;'>Error, email o password no correctos.</span>")
        }
    });

    $('#new_pass').click(()=>{
        let id = $("#uid").val();
        let pass = $('#new_password').val();

        let datos = 'new_password='+pass+'&id='+id;
        if ($.trim(pass).length > 0){
            $.ajax({
                type: "POST",
                url: "funciones_php/save_new_pass.php",
                data: datos,
                beforeSend: () => {
                    $('#respuesta').html('<span style="color:orange";>Cargando...</>');
                },
                success: (response)=>{
                    if(response){
                        $('#respuesta').html(
                            '<span style="color:green";>Contraseña Cambiada. Ingresa Nuevamente.</>'
                        );
                        setTimeout(() => {
                            //window.location.href = 'login.php';
                        }, 4000);
                    }else{
                        $('#respuesta').html(
                            '<span style="color:orange";>Error. No Podemos Guardar tu Contraseña Intenta de Nuevo Más Tarde</>'
                        );
                        setTimeout(() => {
                            $('#respuesta').html('copy; 2017-2021')
                        }, 4000);
                    }
                }
            })
        }else{
            $('#respuesta').html("<span style='color:#cc0000;'>Error. Contraseña no valida.</span>")
        }
    });

});
/* validacion de correo, tamanio de dato */