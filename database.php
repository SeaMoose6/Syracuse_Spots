<?php

// establishing connection to database
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "EatingSpots"; // name of our database

try{
    $con = mysqli_connect($db_server, $db_user, $db_password, $db_name); // connection test
}
catch(mysqli_sql_exception){
    echo "Failed to connect to database"; 
}

if($con){
    //echo "You are connected";  //Used for testing purpose. uncomment to see result
}
?>