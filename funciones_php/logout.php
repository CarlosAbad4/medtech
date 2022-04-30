<?php

session_start();
$_SESSION['user_login'] = '';
$_SESSION['user_type'] = '';
$_COOKIE['token'] = '';
$_SESSION['token'] = '';
setcookie('token', '', time()-1, "/");
session_destroy();
header("Location:../index.html");


?>