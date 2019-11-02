<?php
header('Acces-Control_Allow-Origin: *');
header('Content-Type: application/json');

header('Acces-Control_Allow-Methods: GET');
header('Acces-Control_Allow-Headers:Content-Type, Acces-Control_Allow-Headers,Authorization,x-Requested-With');


include_once'../model/Database.php';
include_once'../model/User.php';

// make DB object
$database=new Database();
$db=$database->connect();

// maker usermodel object
$userModel=new User($db);

$userModel->id=isset($_GET['id']) ? $_GET['id'] : die();

//get data
$result=NULL;
$result=$userModel->readSingleUser();

if($result){

$returnData=$result->fetch();
// write json to the dom
echo json_encode($returnData);

}
else{
// no posts
echo json_encode(['message'=>'no users found!']);
}


 ?>
