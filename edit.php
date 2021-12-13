<?php

include("dbConnection.php");


$dt = stripslashes(file_get_contents("php://input"));
$data = json_decode($dt, true);

$id = $data['stid'];

if ($id != "") {
    $sql = "SELECT * FROM student WHERE id={$id}";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "Error occured !";
}
