<?php

include("dbConnection.php");

$dt = stripslashes(file_get_contents("php://input"));
$data = json_decode($dt, true);
$id = $data['stid'];
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];

if ($name != "" && $email != "" && $password != "") {
    $sql = "INSERT INTO student VALUES('$id','$name','$email','$password') ON DUPLICATE KEY UPDATE name='$name', email='$email', password='$password' ";
    if ($conn->query($sql)) {
        echo "Data saved successfully";
    } else {
        echo "Unable to save data";
    }
} else {
    echo "Fill all fields !";
}
