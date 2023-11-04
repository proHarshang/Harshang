<?php
$response = 0;
require 'phpmailer/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

$sender = $email;
$receiver = "emperorharshang@gmail.com";
$client = "emperorharshang@gmail.com";

$mail = new PHPMailer;
$mail->isSMTP();
$mail->isHTML();

$mail->SMTPDebug = 0;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPAuth = true;

$mail->Username = $sender;
$mail->Password = 'fyjqxxcrnaujnpbp';

$mail->setFrom($receiver, $name);

$mail->addAddress($client, 'Modern Music');

$mail->Subject = $subject;
$mail->Body = 'Name : ' . $name . '<br>
msg : ' . $msg;

if (!$mail->send()) {
    // echo 'Mailer Error: ' . $mail->ErrorInfo;
    $response = 0;
} else {
    // echo 'The email message was sent. ' . $user_email;
    $response = 1;
}
echo $response;
