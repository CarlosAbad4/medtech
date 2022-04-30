<?php
if (empty($_POST['new_password']) || empty($_POST['id'])) {
    header("Location: ../index.html");
}

    include("database.php");
    $server = new ConnectionServer();
    $conexion = $server->getConnection();
    $nueva = md5(strip_tags($_POST['new_password']));
    $id = $_POST['id'];

    $actualizar = "UPDATE usuarios SET password='$nueva', token='' WHERE uid=$id";
    echo $actualizar;
    $resultado = mysqli_query($conexion, $actualizar);

    if ($resultado) {
        echo "Correcto";
    }
    mysqli_close($conexion);
?>