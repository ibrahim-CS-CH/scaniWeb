<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

include 'DB.php';
$db = new DB('mysql','localhost','newscandi','root','Stay@home12');
$method = $_SERVER['REQUEST_METHOD'];
$user = json_decode((file_get_contents("php://input")));
switch($method) {
    case 'POST':
        $sku = $user->sku;
        $getOne = $db->getOne('new',$sku);
        if($getOne == true) {
            $response = ['status' => -1, 'message' => 'Oops..! sku is already exist, please enter a unique SKU'];
            echo json_encode($response);
        }else {
            $db->setProduct('new', $user);
            $response = ['status' => 1, 'message' => 'new product added successfully'];
            echo (json_encode($response));
        }
    break;
    
    case 'GET':
        $db->getAll('new');
    break;
}


