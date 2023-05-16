<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('en', 'PHPMailer/language');
    $mail->setLanguage('uk', 'PHPMailer/language');
    $mail->setLanguage('ru', 'PHPMailer/language');

//Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                  //Enable verbose debug output
    $mail->isSMTP();                                        //Send using SMTP
    $mail->Host       = 'smtp.meta.ua';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                               //Enable SMTP authentication
    $mail->Username   = 'nimesil2023@meta.ua';              //SMTP username
    $mail->Password   = 'NIMesil2023';                      //SMTP password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;                                      //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
    $mail->setFrom('nimesil2023@meta.ua', 'Nimesil');
    $mail->addAddress('nimesil2023@meta.ua');        //Add a recipient

//Content
    $mail->isHTML(true);                             //Set email format to HTML
    $mail->Subject = 'У вас нова заявка з сайту NIMESIL';

    $body = '<h1>Дані клієнта</h1>';

    if(trim(!empty($_POST['name']))){
        $body.= '<p><strong>Ім\'я:</strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['phone']))){
        $body.= '<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    $mail->send();
    echo 'Complete!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
