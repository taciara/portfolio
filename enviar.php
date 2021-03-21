<?php

//
//$to = 'eduarda@gridadvocacia.com.br';
$to = 'contato@taciara.com.br';
$sender = $to;
$subject = "Novo contato";

// Request
$name = isset($_POST['name'])?$_POST['name']:'';
$email = isset($_POST['email'])?$_POST['email']:'';
//$empresa = isset($_POST['empresa'])?$_POST['empresa']:'';
//$atuacao = isset($_POST['atuacao'])?$_POST['atuacao']:'';
//$assunto = isset($_POST['assunto'])?$_POST['assunto']:'';
//$ddd = isset($_POST['ddd'])?"(".$_POST['ddd'].") ":'';
//$mobile = isset($_POST['mobile'])?$_POST['mobile']:'';
$phone = isset($_POST['phone'])?$_POST['phone']:'';
// $message = isset($_POST['message'])nl2br($_POST['message']):'';
$message = isset($_POST['message'])?nl2br($_POST['message']):'';

$page = $_SERVER['SERVER_NAME'];

$body = "<h1>".$subject."</h1>"
	."<strong>".$page."</strong>"
	."<br /><br />"
	."<strong>Nome: </strong>".$name."<br>"
	."<strong>Email: </strong>".$email." <br>"
	//."<strong>Mobile: </strong>".$ddd.$mobile."<br>"
	."<strong>Telefone: </strong>".$phone."<br>"
	//."<strong>Empresa: </strong>".$empresa."<br>"
	//."<strong>Atuação: </strong>".$atuacao."<br>"
	//."<strong>Assunto: </strong>".$assunto."<br>"
	."<strong>Mensagem: </strong>".$message."<br>"
	."<strong>Uma landing page feita orgulhosamente pela Design Multimidia!</strong>";

/* headers adicionais */
$headers = "Content-type:text/html; charset=utf-8\n";
$headers .= "From: Novo contato <$sender>\r\n";
$headers .= "Bcc: clients@designmultimidia.com\r\n";
$headers .= "Return-Path:$sender\r\n";
$headers .= "Reply-To:$email\r\n";

$send = mail($to, $subject, $body, $headers,'-f'.$sender);
if($send){
    $resultmsg = 'Sua mensagem foi enviada com sucesso';
    $status = 'success';
}else{
    $status = 'error';
    $resultmsg = 'Erro no envio de sua mensagem';
}

echo json_encode(array('status'=>$status,'name'=>$name,'msg'=>$resultmsg));
