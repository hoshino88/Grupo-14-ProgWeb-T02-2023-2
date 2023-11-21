<?php
    require_once 'classes/usuarios.php';
    $u = new Usuario;
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="login-box">
            <h1><span class="red">THIS</span> <span class="white">OR</span> <span class="blue">THAT</span></h1>
            <form method="POST">
                <div class="input-group">
                    <input type="email" id="email" name="email" placeholder="EMAIL">
                </div>
                <div class="input-group">
                    <input type="password" id="senha" name="senha" placeholder="SENHA">
                </div>
                <div class="btn-group">
                    <button type="submit" class="btn-login">Login</button>
                    <a href="cadastrar.php" ><button type="button" class="btn-cadastrar">Cadastrar</button></a>
                </div>
                <br>
            </form>
        </div>
    </div>

<?php
//verificar se clicou no botao
if(isset($_POST['email'])){
    $email = addslashes($_POST['email']);
    $senha = addslashes($_POST['senha']);
    //VERIFICAR SE ESTA PREENCHIDO
    if(!empty($email) && !empty($senha)){
        $u->conectar("tela_login","localhost","root","");
        if($u->msgErro == ""){
            if($u->logar($email, $senha)){
                header("location: inicio/tela_temas.php");

            }else{
              echo '<div class="mensagem-erro">Email ou Senha incorretos!</div>';
            }
        }else{
            echo "Erro: ".$u->msgErro;
        }

    }else{
        echo '<div class="mensagem-erro">PREENCHA TODOS OS CAMPOS!</div>';
    }
}





?>
</body>
</html>
