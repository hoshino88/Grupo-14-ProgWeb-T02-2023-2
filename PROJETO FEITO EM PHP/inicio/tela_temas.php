<?php
    session_start();
    if(!isset($_SESSION['id_usuario'])){
        header("location: ../index.php");
        exit;
    }
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="temas.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <title>Tela Temas</title>
</head>
<body>
    <div class="container">

        <div id="sidebar" class="sidebar">
            <div class="conteudo-sidebar">
                <a class="item-sidebar" href="#">Temas</a>

                <a class="item-sidebar bottom" href="../sair.php">Sair</a>
            </div>
        </div>

        <header>
            <nav class="menu-top">
                <ul class="menu">
                    <li class="menu-sanduiche">
                        <span id="imgSanduiche" class="material-symbols-outlined">menu</span>
                    </li>
                    <li class="nome">
                       <?php
                            if (isset($_SESSION['nome_usuario'])) {
                                echo '<h1 class="nome-conta">' . $_SESSION['nome_usuario'] . '</h1>';
                            }
                        ?>
                    </li>
                    <li class="logo">
                        <a class="logo-nome" href="#">
                            <h1 class="this">THIS</h1>
                            <h1 class="or">OR</h1>
                            <h1 class="that">THAT</h1>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>


        

        <h3>TOP TEMAS</h3>
        <div class="ranking">
            <div class="box">
                <a href="../temapokemon/temapokemon.php" class="lista">
                    <div class="imgem">
                        <img src="pokeball.png" alt="#">
                    </div>
                    <div class="content">
                        <h2 class="rank primeiro">POKEMON</h2>
                        <h4>POKEMON</h4>
                    </div>
                </a>




                <a href="../temajogos/temajogos.php" class="lista">
                    <div class="imgem">
                        <img src="jogos.jpg" alt="#">
                    </div>
                    <div class="content">
                        <h2 class="rank 2">JOGOS</h2>
                        <h4>JOGOS</h4>
                    </div>
                </a>

                <a href="../temaanime/temaanime.php" class="lista">
                    <div class="imgem">
                        <img src="nuvem.webp" alt="#">
                    </div>
                    <div class="content">
                        <h2 class="rank 3">animes</h2>
                        <h4>ANIMES</h4>
                    </div>
                </a>
                

        <div class="overlay hidden" id="overlay"></div>
        
    </div>
    <script src="temas.js"></script>
</body>