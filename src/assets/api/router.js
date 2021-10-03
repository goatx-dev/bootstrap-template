<?php

//---------------------------------------------------------------------
// Main API Router for this angular directory.
// Author:  Edward Honour
// Date: 07/18/2021
//---------------------------------------------------------------------

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json'); 

//
// Require and initialize the class libraries necessary for this module.
//
require_once('class.USER.php');

$F=new FACILITY();
$U=new USER();

//
// Get the Data from the POST.  Note:  This is not how PHP normally sends POST data.
//
$data = file_get_contents("php://input");
$data = json_decode($data, TRUE);
if (!isset($data['q'])) die('[]');

$output=array();
switch ($data['q']) {
	case 'facility-list':
		$output=$F->getFacilityList($data);
		break;				
	case 'facility-dashboard':
		$output=$F->getFacilityDashboard($data);
		break;				
	case 'user-list':
		$output=$U->getUserList($data);
		break;				
	default:
                break;
}

$o=json_encode($output);
$o=stripcslashes($o);
$o=str_replace('null','""',$o);
echo $o;

?>