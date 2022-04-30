<?php

if (isset($_SESSION['token']) || isset($_COOKIE['token'])) {
    header("Location:index.html");
}

?>