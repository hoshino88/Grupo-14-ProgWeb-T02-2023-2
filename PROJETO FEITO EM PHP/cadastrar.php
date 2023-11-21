<?php
    require_once 'classes/usuarios.php';
    $u = new Usuario;

$mensagem = 'Email ja Cadastrado!';
$cor = 'red';
$tamanhoFonte = '18px';
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" href="stylecadastrar.css">
</head>
<body>
    <div class="container">
        <div class="login-box">
            <h1><span class="red">THIS</span> <span class="white">OR</span> <span class="blue">THAT</span></h1>
            <form method="POST">
                <div class="input-group">
                    <input type="text" id="name" name="nome" placeholder="NOME" maxlength="30">
                </div>
                <div class="input-group">
                    <input type="email" id="email" name="email" placeholder="EMAIL" maxlength="40">
                </div>
                <div class="input-group">
                    <input type="password" id="senha" name="senha" placeholder="SENHA" maxlength="15">
                </div>
                <div class="input-group">
                    <input type="password" id="confsenha" name="confsenha" placeholder="CONFIRMAR SENHA" maxlength="15">
                </div>
                <div class="btn-group">
                    <button type="submit" class="btn-cadastrar">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>

<?php
//verificar se clicou no botao
if(isset($_POST['nome'])){
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $senha = addslashes($_POST['senha']);
    $confirmarSenha = addslashes($_POST['confsenha']);
    //VERIFICAR SE ESTA PREENCHIDO
    if(!empty($nome) && !empty($email) && !empty($senha) && !empty($confirmarSenha)){
        $u->conectar("tela_login","localhost","root","");
        if($u->msgErro == ""){
            //Esta tudo okk
            if ($senha == $confirmarSenha) {
                if ($u->cadastrar($nome, $email, $senha)) {
                    echo '<div class="mensagem-sucesso">Cadastrado com Sucesso! Basta clicar em <a href="index.php">Realizar Login</a> para Acessar!</div>';
                } else {
                    echo '<div class="mensagem-erro">Email já Cadastrado!</div>';
                }
            } else {
                echo '<div class="mensagem-erro">Senha e Confirmar Senha são diferentes!</div>';
            }  
        }else{
            echo "ERRO:".$u->msgErro;
        }

    }else{
        echo '<div class="mensagem-erro">PREENCHA TODOS OS CAMPOS!</div>';
    }

}

?>
</body>
</html>
