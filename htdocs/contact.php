<?php

    require 'includes/PHPMailer.php';
    require 'includes/SMTP.php';
    require 'includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;


    $mail = new PHPMailer();

    $mail->isSMTP();

    $mail->Host = "smtp.gmail.com";

    $mail->SMTPAuth = "true";

    $mail->SMTPSecure = "tls";

    $mail->Port = "587";

    $mail->Username = "tommy.madden1233@gmail.com";

    $mail->Password = "RocketLeague#1233";

    $mail->Subject = "From: Portfolio Website";

    $mail->Body = $_POST['name'] . "\r\n";

    $mail->Body .= $_POST['email'] . "\r\n" . "\r\n";

    $mail->Body .= $_POST['message'];

    $mail->addAddress("tommy.madden1233@gmail.com");

    if ($mail->Send()){
        echo 'Email Sent';
    } else{
        echo "Error";
    }
    
    $mail->smtpClose();

    echo "<script>
    window.location.href='http://thomas-madden.epizy.com/';
    alert('Email Sent');
    </script>";

    goback();

?>