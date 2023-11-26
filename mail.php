<?php
$response = '0';

require 'phpmailer/vendor/autoload.php';
require_once 'config.php';

use PHPMailer\PHPMailer\PHPMailer;

if (isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['email']) && isset($_POST['msg'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    $sender = $receiverEmail;
    $password = $senderPassword;
    $receiver = $email;
    $client = $receiverEmail;

    $mail = new PHPMailer;
    $mail->isSMTP();

    $mail->SMTPDebug = 0;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';

    $mail->Username = $sender;
    $mail->Password = $password;

    $mail->setFrom($receiver, $name);

    $mail->addAddress($client, 'Harshang Thakar');

    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = 'Name : ' . $name . '<br> Email : ' . $email . '<br> Message : ' . $msg;

    if (!$mail->send()) {
        $response = '0';
    } else {
        $response = '1';
    }
}

echo $response;
