<html>
<?php
	include('../connect.php');
	$monthname = array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
	$month = $monthname[date('m')-1];
	$query = "select * from pembayaran join penghuni on (pembayaran.NIM = penghuni.NIM) where Tanggal like '%".$month.", 2017' order by pembayaran.ID;";
	$res = $conn->query($query) or die($conn->error);
	$pembayaran = array();
	$c = 0;
	while ($row = $res->fetch_assoc()){
		$pembayaran[$c++] = $row;
	}
	$js_array = json_encode($pembayaran);
?>

<head>
	<title>PDF test</title>
	<link href="../style.css" media="all" rel="stylesheet">
	<link href="../calendar.css" media="all" rel="stylesheet">
	<link href="../semantic-min.css" media="all" rel="stylesheet" >
	<script type="text/javascript" src="jspdf.min.js"></script>
	<script type="text/javascript" src="template.js"></script>
	<script>
	var pembayaran = <?php echo $js_array; ?>;
	var dx = [8.7,22.1,51.5,13.9,15.5,24,21.5];	
	var dy = 8.5;

	var monthname = {"Januari":"01", "Februari":"02", "Maret":"03", "April":"04", "Mei":"05", "Juni":"06", "Juli":"07", "Agustus":"09", "September":"09", "Oktober":"10", "November":"11", "Desember":"12"}

	function getPDF() {		
		var doc = new jsPDF();
		doc.addImage(imgData,'JPEG',5,0,200,300);
		doc.setFontSize(11);
		var x0 = 30.0;
		var y0 = 86.0;
		var x=x0,y=y0;
		var xa = 0;
		var total = 0;
		for (var i=0;i<pembayaran.length;i++){
			// for (var j=0;j<7;j++){
			// 	doc.text(x,y, "x");
			// 	x+=dx[j];
			// }
			var j=0;
			doc.text(x,y, String(i));
			x+=dx[j++];
			console.log(i);
			doc.text(x,y, String(pembayaran[i]['NIM']));
			x+=dx[j++];
			doc.text(x,y, String(pembayaran[i]['Nama']));
			x+=dx[j++];
			doc.text(x,y, String(pembayaran[i]['Kamar']));
			x+=dx[j++];
			doc.text(x,y, String(pembayaran[i]['Asrama']));
			x+=dx[j++];
			var res = pembayaran[i]['Tanggal'].split(" ");
			var m = res[1].split(',');
			var month = monthname[m[0]];
			doc.text(x,y, res[0]+"/"+month+"/"+res[2]);
			x+=dx[j++];
			total += parseInt(pembayaran[i]['Nominal']);
			doc.text(x,y, String(pembayaran[i]['Nominal']));
			xa = x;
			x=x0;
			y+=dy;
			if (i==19){
				doc.addPage();
				doc.addImage(imgData,'JPEG',5,0,200,300);
				doc.setFontSize(11);
				y = y0;
			}
		}
		doc.text(xa,y0+(dy*20),String(total));
		doc.save('Laporan Bulanan.pdf');
	}

	</script>
</head>


<body >
<h1>Laporan Pemasukan Bulanan</h1>

<table class="ui compact table" id="tabel_laporan_tahunan">
	<thead>
		<tr>
			<th>No</th>
			<th>NIM</th>
			<th>Nama</th>
			<th>Kamar</th>
			<th>Asrama</th>
			<th>Tanggal</th>
			<th>Nominal</th>
		</tr>
	</thead>
	<tbody>
		<?php
			$len = count($pembayaran);
			$sum = 0;
			for ($i=0;$i<$len;$i++){
				echo "<tr>";
				echo "<td>".$i."</td>";
				echo "<td>".$pembayaran[$i]['NIM']."</td>";
				echo "<td>".$pembayaran[$i]['Nama']."</td>";
				echo "<td>".$pembayaran[$i]['Kamar']."</td>";
				echo "<td>".$pembayaran[$i]['Asrama']."</td>";
				echo "<td>".$pembayaran[$i]['Tanggal']."</td>";
				echo "<td>".$pembayaran[$i]['Nominal']."</td>";
				$sum += (int)$pembayaran[$i]['Nominal'];
				echo "</tr>";
			}
			echo "<tr><td colspan=\"6\">Total</td><td>".$sum."</td></tr>";
		?>
	</tbody>
</table>


<br>
<a href="javascript:getPDF()">Download laporan </a>
</body>


<html>