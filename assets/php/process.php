<?php

$name = $_POST["name"];
$Subject = $_POST["subject"];
$email = $_POST["email"];
$message = $_POST["message"];
 
$EmailTo = "administracion@dminsumos.com.ar";
 
// prepare email body text
$Body = "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
	echo "success";
}else{
	echo "invalid";
}
 
?>