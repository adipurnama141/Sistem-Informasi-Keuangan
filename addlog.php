<?php
include("connect.php");
error_reporting(0); 


$nim = $_POST["nim"];
$bank = $_POST["bank"];
$nominal = $_POST["nominal"];
$tanggal = $_POST["tanggal"];


$sql = "INSERT INTO pembayaran (NIM,Bank,Nominal,Tanggal) VALUES ('$nim', '$bank', '$nominal' , '$tanggal')";
if(mysqli_query($conn, $sql)){
	echo "Success!";
} else {
    #echo "ERROR: Could not able to execute $sql. " . mysqli_error();
}
?>