<?php 
session_start();

$user = $_SESSION['user'];

if($user == 'admin'){
    echo '{
        "message" : "this is a secret message only",   
        "sucess" : true
    }';
} else {
    echo '{
     "message"  : " who are you ",
     "sucess" : false  
    }';
}

?>