<?php
$db_host = "localhost";
$db_user = "root";
$db_name = "ajx-jquery-php";
$db_pass = "";

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die("Connection error");
}
