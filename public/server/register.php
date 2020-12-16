<?php

include('connection.php');

$input = file_get_contents("php://input");
try {
    $post = json_decode($input, 1);
} catch (Exception $e) {
    $post = $_POST;
}
$_POST = $post;

if(empty($_POST->nome))
    {
        $error[] = 'Name is Required';
    }
    else
        {
            $data[':nome'] = $_POST->nome;
        }

if(empty($_POST->email))
    {
        $error[] = 'Email is Required';
    }
    else
        {
            if(!filter_var($_POST->email, FILTER_VALIDATE_EMAIL))
                {
                    $error[] = 'Invalid Email Format';
                }
                else
                {
                    $data[':email'] = $_POST->email;
                }
        }

if(empty($_POST->senha))
    {
        $error[] = 'Password is Required';
    }
    else
        {
            $data['senha'] = password_hash($_POST->senha, PASSWORD_DEFAULT);
        }

if(empty($error))
    {
        $query = "INSERT INTO `usuario` (nome, email, senha) VALUES (:nome, :email, :senha)";
        $statement = $connect->prepare($query);
        if($statement->execute($data))
            {
                $message = 'Registration Completed';
            }
    }
    else
        {
            $validation_error = implode(", ", $error);
        }

$output = array(
        'error'  => $validation_error,
        'message' => $message
    );

echo json_encode($output);


?>





