<?php

    include('connection.php');

    $message = '';
    $validation_error = '';

    $input = file_get_contents("php://input");
    try {
        $post = json_decode($input);
    } catch (Exception $e) {
        $post = $_POST;
    }
    $_POST = $post;

    //validação de nome
    if(empty($_POST->nome)) {
        $error[] = 'Name is Required';
    } else {
        $data[':nome'] = $_POST->nome;
    }

    //validação de nome
    if(empty($_POST->email)) {
        $error[] = 'Email is Required';
    } else {
        if(!filter_var($_POST->email, FILTER_VALIDATE_EMAIL)) {
            $error[] = 'Invalid Email Format';
        }
        else {
            $data[':email'] = $_POST->email;
        }
    }

    //validação de nome
    if(empty($_POST->senha)) {
        $error[] = 'Password is Required';
    } else {
        $data['senha'] = password_hash($_POST->senha, PASSWORD_DEFAULT);
    }

    //cadastro
    if(empty($error)) {
        $query = "INSERT INTO `usuario` (nome, email, senha) VALUES (:nome, :email, :senha)";
        $statement = $con->prepare($query);

        if($result->execute($data)) {
            $message = 'Registration Completed';
        }
    } else {
        $validation_error = implode(", ", $error);
    }

    //exception de erro
    $output = array(
        'error'  => $validation_error,
        'message' => $message
    );

    echo json_encode($output);

?>





