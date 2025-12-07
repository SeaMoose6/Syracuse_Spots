<?php

$email = $_POST['email'];
$name = $_POST['name'];
$password = $_POST['password'];

//Database 
$con = new mysqli('localhost', 'root', '', 'EatingSpots');
if($con->connect_error){
    die('connection Failed: '.$con->connect_error);
}
else{
    $stmt = $con->prepare("insert into sign_up(email, name, password))
    values(?,?,?)");

    $stmt-> bind_param("ssi", $email, $name, $password,);
    $stmt->execute();
    echo "Sign up successful";
    $stmt->close();
    $conn->close();
}
?>