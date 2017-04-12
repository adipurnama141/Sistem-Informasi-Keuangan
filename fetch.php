<?php
include("connect.php");
error_reporting(0); 


$nim = $_POST["nim"];

$sql = "SELECT * from penghuni WHERE NIM = '$nim'";
$result = mysqli_query($conn,$sql);


while($row = mysqli_fetch_array($result)) {

	$data = array('nama' => $row['Nama'] , 'asrama' => $row['Asrama'] , 'kamar' => $row['Kamar']);
	$json_string = json_encode($data);
	echo $json_string;
}

?>