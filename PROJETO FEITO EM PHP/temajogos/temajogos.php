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
    <link rel="stylesheet" href="temajogos.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Jogos</title>
</head>
<body>
    <div class="container">
        <div id="sidebar" class="sidebar">
            <div class="conteudo-sidebar">
                <a class="item-sidebar" href="../inicio/tela_temas.php#">Temas</a>
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

        <<!-- ... -->
<div id="gameContainer">
  <h1 style="color: white;">QUAL VOCE PREFERE?</h1>
  <div id="imageContainer">
    <div id="pokemon1" class="pokemonContainer" onclick="selectOption('this')">
      <img id="game1" class="pokemonImage" />
    </div>
    <div id="pokemon2" class="pokemonContainer" onclick="selectOption('that')">
      <img id="game2" class="pokemonImage" />
    </div>
  </div>
  <div id="questionContainer">
    <p style="color: white;">Escolha dificil? Pule para o proximo</p>
    <button onclick="loadNextImages()">pular</button>
  </div>
  <div id="result"></div>
</div>
<!-- ... -->


        <div class="overlay hidden" id="overlay"></div>
    </div>
    <script src="temajogos.js"></script>
</body>
</html>
