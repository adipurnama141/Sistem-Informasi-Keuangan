<?php
include("connect.php");
error_reporting(0); 


$sql = "(Select nama, asrama, kamar, ((select sum(nominal) from tagihan where tagihan.nim = penghuni.nim) - sum(nominal)) as tunggakan from penghuni   join pembayaran on (penghuni.nim = pembayaran.nim) group by penghuni.nim)
union
(select nama,asrama,kamar, (select sum(nominal) from tagihan where penghuni.nim = tagihan.NIM)as tunggakan from penghuni where penghuni.nim not in ( select nim from pembayaran)) ";
$result = mysqli_query($conn,$sql);


$rows = array();
while($row = mysqli_fetch_array($result)) {

	$rows[] = $row;
	
}
echo json_encode($rows);


?>