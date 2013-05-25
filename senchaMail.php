<?php
if (($_POST['name'] != NULL) && ($_POST['message'] != NULL)) {
    if($_POST['email'] != NULL){
        $mail = $_POST['email'];
    }    
    $name = $_POST['name'];
    $subject = "Nuevo mensage de portofolioApp";
    $text = $_POST['message'];
	
    $to = "toniwindows@hotmail.com";
    $message =" Tienes un nuevo mensaje de: ".$name. "\r\n";
     if($_POST['email'] != NULL){
        $message .= " Email: " .$mail. "\r\n";
    }
    $message .=" Mensaje: ".$text. "\r\n";

    if(mail($to, $subject, $message)){
           print '{"success": true}';
   }    
} else {
    print '{"success": false}';
}
?>