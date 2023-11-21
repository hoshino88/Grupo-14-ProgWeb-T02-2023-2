<?php

class Usuario{
	
	private $pdo;
	public $msgErro = "";

	public function conectar($nome, $host, $usuario, $senha){
		global $pdo;
		global $msgErro;

		try{
			$pdo = new PDO("mysql:dbname=".$nome.";host=".$host, $usuario, $senha);

		}catch (PDOException $e) {
			$msgErro = $e->getMessage();
		}
	}

	public function cadastrar($nome, $email, $senha){
		global $pdo;
		//verificar se ja existe o email cadatrado
		$sql = $pdo->prepare("SELECT id_usuario FROM usuarios WHERE email = :e");
		$sql->bindValue(":e",$email);
		$sql->execute();

		if($sql->rowCount() > 0){
			return false;//ja esta cadastrada

		}else{
			//caso nao, cadastrar
			$sql = $pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (:n, :e, :s)");
			$sql->bindValue(":n",$nome);
			$sql->bindValue(":e",$email);
			$sql->bindValue(":s",md5($senha));

			$sql->execute();

			return true;//cadastrada com sucesso
		}
	}

	public function logar($email, $senha){
		global $pdo;
		//verificar se email e senhas estao cadastrados
		$sql = $pdo->prepare("SELECT id_usuario, nome FROM usuarios WHERE email = :e AND senha = :s");
		$sql->bindValue(":e",$email);
		$sql->bindValue(":s",md5($senha));		

		$sql->execute();

		if($sql->rowCount() > 0){
			//se sim, logar(iniciar sessao)
			$dado = $sql->fetch();
			session_start();
			$_SESSION['id_usuario'] = $dado['id_usuario'];
			$_SESSION['nome_usuario'] = $dado['nome'];
			return true; //logado com sucesso

		}else{
			return false;//nao foi possivel logar

		}
	}
}







?>