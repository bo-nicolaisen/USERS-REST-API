<?php

header('Acces-Control_Allow-Origin: *');
header('Content-Type: application/json');

header('Acces-Control_Allow-Methods: DELETE');
header('Acces-Control_Allow-Headers:Content-Type, Acces-Control_Allow-Headers,Authorization,x-Requested-With');

include_once'../model/Database.php';
include_once'../model/User.php';

// make DB object
$database=new Database();
$db=$database->connect();

// maker usermodel object
$userModel=new User($db);

// get post Data
$postData=json_decode(file_get_contents("php://input"));

// set data to the model

$userModel->id=$postData->id;

// run update user
if($userModel->deleteUser()){
  echo json_encode(['message'=>'User deleted']);
}
else{
    echo json_encode(['message'=>'User not deleted!']);
}





 ?>
