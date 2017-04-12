<?php
include("connect.php");
error_reporting(0); 




$sql = "SELECT * from pembayaran join penghuni on pembayaran.nim = penghuni.nim; ";
$result = mysqli_query($conn,$sql);


$rows = array();
while($row = mysqli_fetch_array($result)) {

	$rows[] = $row;
	
}
echo json_encode($rows);


?>