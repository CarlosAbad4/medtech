<?php
  include_once('funciones_php/token_unico.php');
  // no dejar a esta pagina si hay un token activo
?> 

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <!-- Favicon-->
		<link rel="shortcut icon" href="img/favicon.ico">

    <!-- Sweet Alert -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
		<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <title>Login</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sign-in/">

    

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    <style>
    .btn-amarillo {
      color: #fff;
      background-color: #f8b600;
      border-color: #f8b600;
    }

    body{
      background-image: url("img/bgblanco.png");
      background-size: cover;
    }

    
    </style>
    
    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
  </head>
  <body class="text-center">

    <main class="form-signin">
    <form>
        <img class="mb-4" src="img/person.png" alt="" width="128" height="128">
        <h1 class="h3 mb-3 fw-normal">Enter The Administration Panel</h1>

        <div class="form-floating">
        <input type="email" class="form-control" id="email" placeholder="name@example.com">
        <label for="floatingInput">Email Address</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="password" placeholder="Password">
        <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary btn-amarillo" type="button" id="singin">Sign in</button>
        <div class="form-floating">
        <a href="recuperar.php">Did You Forget Your Password?</a>
        </div>
        <p class="mt-5 mb-3 text-muted" id="respuesta">&copy; 2017–2021</p>
    </form>
    </main>

    <!-- <script type="text/javascript" src="js/ventana.js"></script> -->

    <script src="js/jquery3.js"></script>
    <script src="js/admin_login.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  </body>
</html>