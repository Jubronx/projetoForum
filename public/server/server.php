<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if(!isset($_POST)) die();

session_start();

$response = []; 

$con = mysqli_connect('127.0.0.1:3307', 'root', '', 'projectforum');

$input = file_get_contents("php://input");
try {
    $post = json_decode($input, 1);
} catch (Exception $e) {
    $post = $_POST;
}
$_POST = $post;

$email = mysqli_real_escape_string($con, $_POST['email']);
$senha = mysqli_real_escape_string($con, $_POST['senha']);

$query = "SELECT * FROM `usuario` WHERE email='$email' AND senha='$senha'";

$result = mysqli_query($con, $query);

if(mysqli_num_rows($result) > 0) {
	$response['status'] = 'loggedin';
    $response['user'] = $email;
    $response['id'] = md5(uniqid());
	$_SESSION['id'] = $response['id'];
	$_SESSION['user'] = $email;
} else {
	$response['status'] = 'error';
}

echo json_encode($response);