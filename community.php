<?php
// signup for community to write reviews
//Database 
include("database.php"); // connects to database

// --- HANDLE POST (Joining Community Ratings) ---
if($_SERVER["REQUEST_METHOD"] == "POST"){
   
    
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_SPECIAL_CHARS);
    $username = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS); 
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS); 

    
    // check if any of the three variables in the column are empty in the form
    if(empty($email)){
        echo "please enter a email";
    }
    else if(empty($username)){
        echo "please enter a username";
    }
    else if(empty($password)){
        echo "please enter a password";
    }

    // proceed if user enters all column parameters correctly
    else{
        
        $hash = password_hash($password, PASSWORD_DEFAULT); // hash password for hacker protection if database is breached
        $sql = "INSERT INTO sign_up (email,username,password)
                VALUES('$email','$username','$hash')";
  
        try{
            mysqli_query($con, $sql);
            echo"You are now registered!"; // we can write html directly here for better look
        }
        catch(mysqli_sql_exception $e){
            echo "error: $e"; 
        } 
    }
}

mysqli_close($con);
?>