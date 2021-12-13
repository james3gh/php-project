<?php

include("dbConnection.php");

$dt = stripslashes(file_get_contents("php://input"));
$data = json_decode($dt, true);

$id = $data['stid'];

if ($id != "") {
    $sql = "DELETE FROM student WHERE id={$id}";
    if ($conn->query($sql)) {
        echo "Data deleted successfully";
    } else {
        echo "Unable to delete data";
    }
} else {
    echo "Error occured !";
}
