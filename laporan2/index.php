<html>

<head>
	<title>PDF test</title>
	<script type="text/javascript" src="jspdf.min.js"></script>
	<script type="text/javascript" src="template.js"></script>
	<script>
	var dx = [8.7,22.1,51.5,13.9,15.5,24,21.5];	
	var dy = 8.5;

	function getPDF() {		
		var doc = new jsPDF();
		
		doc.addImage(imgData,'JPEG',5,0,200,300);
		doc.setFontSize(12);
		var x0 = 30.0;
		var y0 = 86.0;
		var x=x0,y=y0;
		for (var i=0;i<20;i++){
			for (var j=0;j<7;j++){
				doc.text(x,y, "x");
				x+=dx[j];
			}
			x=x0;
			y+=dy;
		}
		
		doc.save('Laporan Bulanan.pdf');
	}

	</script>
</head>


<body >
<h1>Laporan Pemasukan Bulanan</h1>

<br>
<a href="javascript:getPDF()">Download laporan </a>
</body>


<html>