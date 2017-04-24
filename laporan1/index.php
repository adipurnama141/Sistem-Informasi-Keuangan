<html>
<?php
	include('../connect.php');
	$month = array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
	$yearres = array('JN'=>array(),'IN'=>array(), 'KN'=>array(), 'KP'=>array(), 'SA'=>array());
	foreach ($yearres as $key1 => $value) {
		foreach ($month as $key2 => $value) {
			$query = "select sum(Nominal) as total from pembayaran join penghuni on (pembayaran.NIM = penghuni.NIM) where Tanggal like '%".$value.", 2017' and Asrama='".$key1."';";
			$res = $conn->query($query) or die($conn->error);
			$yearres[$key1][$key2] = $res->fetch_assoc();
			if ($yearres[$key1][$key2]['total']!=NULL){

			}
			else {
				$yearres[$key1][$key2]['total'] = 0;
			}
		}
	}
	$js_array = json_encode($yearres);
?>

<head>
	<title>PDF test</title>
	<script type="text/javascript" src="jspdf.min.js"></script>
	<script type="text/javascript" src="template.js"></script>
	<script>

	

	function getPDF() {
		var yearres = <?php echo $js_array; ?>;
		
		var doc = new jsPDF();

		
		doc.addImage(imgData,'JPEG',5,0,200,300);
		doc.setFontSize(12);
		var c=1;
		var initx = 52;
		var x = initx;
		var y = 86;
		var totalsemua = 0;
		for (var i=0;i<12;i++){
			var totalbulan = 0;
			for (var k in yearres){
				totalbulan+=parseInt(yearres[k][i]['total']);
				doc.text(x,y,String(yearres[k][i]['total']));
				x+=22.1;
			}
			doc.text(x,y, String(totalbulan));
			totalsemua+=totalbulan;
			x = initx;
			y+=8.6;
		}
		for (var k in yearres){
			var totalasrama = 0;
			for (var i=0;i<12;i++){
				totalasrama+=parseInt(yearres[k][i]['total']);
			}
			doc.text(x,y, String(totalasrama));
			x+=22.1;
		}
		doc.text(x,y, String(totalsemua));
		doc.save('Laporan Pemasukan Tahunan.pdf');
	}

	</script>
</head>


<body >
<h2>Laporan 1 - Laporan Pemasukan Tahunan</h2>

<br>
<a href="javascript:getPDF()">Download laporan </a>
</body>


<html>