<?php
$recepient = "boris.sizoff@gmail.com";
$sitename = "sizov.ml";

$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "E-mail: $email \nMessage: $text";

$pagetitle = "New  message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>