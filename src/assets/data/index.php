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
require_once('class.menus.php');
require_once('class.pages.php');
require_once('class.forms.php');

$M=new MENUS();
$P=new PAGES();
$F=new FORMS();

//
// Get the Data from the POST.  Note:  This is not how PHP normally sends POST data.
//
$data = file_get_contents("php://input");
$data = json_decode($data, TRUE);
//if (!isset($data['q'])) die('[]');

$output=array();
if (!isset($data['q'])) $data['q']="vertical-menu";
switch ($data['q']) {
        case 'vertical-menu':
                $output=$M->getVerticalMenu($data);
                break;
        case 'v':
                $output=$P->getDashboardData($data);
                break;
        case 'h':
                $output=$P->getDashboardData($data);
                break;
        case 'forms-elements':
                $output=$F->getSimpleFormData($data);
                break;
        case 'simple-form':
                $output=$F->postForm($data);
                break;
        case 'tables-basic':
                $output=$P->getTableData($data);
                break;
        default:
                $output=$P->getDashboardData($data);
                break;
}
$o=json_encode($output);
$o=stripcslashes($o);
$o=str_replace('null','""',$o);
echo $o;

?>