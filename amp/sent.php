<?php

if(isset($_POST['enviar'])) {

	//require "../class/Wfapimail.php";
	
	$data = date("d/m/Y - H:i");
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$assunto = 'Novo Contato';
	//$assunto = $_POST['assunto'];
	$mensagem = nl2br($_POST['mensagem']);

	//        Email recebido        //
	$para           = "contato@taciara.com.br";
	$assunto        = "$assunto | $data - Contato Site";

	if(Wfapimail::send(array(
		'to'=>$para,
		'bcc'=>'clients@designmultimidia.com',
		'subject'=>$assunto,
		'fields'=>array(
			'nome'=>$nome,
			'email'=>$email,
			'telefone'=>$telefone,
			'mensagem'=>$mensagem,
		)
	))){
		//$msgtitle = "Obrigado!";
		//$msg = "Mensagem enviada com <strong>SUCESSO!</strong>";
		echo '<script>alert("Obrigado! Mensagem enviada com SUCESSO!");window.location="https://taciara.com.br/amp/";</script>';
	}else{
		$msgtitle = "ERRO!";
		$msg = "Não foi possível enviar a mensagem.";
	}
}
?>