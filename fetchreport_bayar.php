<?php
include("connect.php");
error_reporting(0); 


$sql = "Select asrama , sum(nominal) as nominal from penghuni join pembayaran on (penghuni.nim = pembayaran.nim) group by asrama";
$result = mysqli_query($conn,$sql);


$rows = array();
while($row = mysqli_fetch_array($result)) {

	$rows[] = $row;
	
}
echo json_encode($rows);


?>