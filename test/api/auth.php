<?php 
session_start();
$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin')
    {
        $_SESSION['user']= 'admin';
        ?>
        {
            "sucess" : true,
            "secret" : "This is the secret no one knows but the admin"
        }
        <?php
    } else {
        ?>
        {
            "sucess" : false,
            "message" : "Invalid credentials"
        }
        <?php
    }
 } else {
        ?>
        {
            "sucess": false,
            "message" : "Only Post acess is accepted"
        }
        <?php    
    }
    ?>
    

