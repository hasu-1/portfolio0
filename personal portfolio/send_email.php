<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'hasumoji@gmail.com'; // change this to your email address
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = 'New message from ' . $name;
  $headers = 'From: ' . $name . ' <' . $email . '>';
  $sent = mail($to, $subject, $message, $headers);
  if ($sent) {
    http_response_code(200);
    echo 'Mail sent successfully.';
  } else {
    http_response_code(500);
    echo 'Failed to send mail.';
  }
}
?>
