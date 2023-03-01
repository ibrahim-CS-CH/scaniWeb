<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
include 'DB.php';
$db = new DB('mysql','localhost','newscandi','root','Stay@home12');
$method = $_SERVER['REQUEST_METHOD'];
$user = json_decode((file_get_contents("php://input")));
$db->deleteProduct('new', $user);