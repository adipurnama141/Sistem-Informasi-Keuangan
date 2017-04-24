<?php
include("connect.php");
error_reporting(0); 


$sql = "Select sum(nominal) as nominal, asrama from penghuni natural join tagihan group by asrama ";
$result = mysqli_query($conn,$sql);


$rows = array();
while($row = mysqli_fetch_array($result)) {

	$rows[] = $row;
	
}
echo json_encode($rows);


?>