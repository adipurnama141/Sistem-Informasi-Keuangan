function myFunction()  {
		$('#notif_ok').transition('scale');	
		$("#form_nim").focus();
		$('.showinfo').transition('hide');
	}
  
	//fetching complete data from NIM key	
	function fetchdata() {
		var nim = document.getElementById("form_nim").value;
		var xhr = new XMLHttpRequest();
		var formData = new FormData();
			formData.append("nim" , nim);
			xhr.open("post","fetch.php");
			xhr.send(formData);

		xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			console.log(xhr.responseText);
			var fetchedData =JSON.parse(xhr.responseText);
			console.log(fetchedData);
			document.getElementById("nama_penghuni").innerHTML = fetchedData.nama;
			document.getElementById("asrama").innerHTML = fetchedData.asrama;
			document.getElementById("kode_kamar").innerHTML = fetchedData.kamar;
			}
		}	
	};
	
	
	//insert transaction into the database
	function dosomething() {
		var nim = document.getElementById("form_nim").value;
		var bank = $('#form_bank').dropdown('get value');
		var nom = document.getElementById("form_nominal").value;
		var tgl = document.getElementById("form_tgl").value;

		var xhr = new XMLHttpRequest();
		var formData = new FormData();
			formData.append("nim" , nim);
			formData.append("bank", bank);
			formData.append("nominal", nom);
			formData.append("tanggal", tgl);
			xhr.open("post","addlog.php");
			xhr.send(formData);
			

		xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			$('#notif_ok').transition('scale');	
			console.log(xhr.responseText);
			document.getElementById("form_pembayaran").reset();
			window.setTimeout(myFunction, 2500);
			
		}
		};
	};


  $(document).ready(function() {
  
	//init calendar
	$('#example2').calendar({type: 'date'});
	
	//init dropdown
	$('.ui.dropdown').dropdown("set value","Mandiri");
	
	//hide detail box
	$('.showinfo').transition('hide');
	$('#notif_ok').transition('hide');
	$('#modul_laporan_bulanan').transition('hide');		

	//prevent page refresh when submitting form
	$(".form").submit(function(e) {return false;});
	
	var state = 0;

	
	$( "a" ).click(function( event ) {
		event.preventDefault();
		
		$("a").removeClass("selected");
		$(this).addClass("selected");
		
	});
	
	$("#lap_bulanan").click(function() {
		console.log("blah!");
		$("#modul_input").transition('hide');
		$("#modul_laporan_bulanan").transition('scale');
		
		
		$.get('fetchreport.php', function(responseText) {
		console.log(responseText);
		var fetchedData =JSON.parse(responseText);
		console.log(fetchedData);
		
		var income = 0;
		
		fetchedData.forEach( function(item) {
			var template_string;
			
			template_string = "<tr><td><h3>" + item.Nama + "</h4></td><td><a class='ui green image label'>" + item.Asrama;
			template_string += "<div class='detail' id='kode_kamar'>" + item.Kamar +"</div></a></td></a></td><td><a class='ui blue image label'>"
			template_string += item.Bank + "</a></td><td><b><h3>" + item.Nominal + ".000</h3></b></td>"
			template_string += "<td>" + item.Tanggal + "</td></tr>"
	
			income += parseInt(item.Nominal);
		
			$("#tabel_lap_bulanan > tbody:last-child" ).append(template_string);
			
		});
		
		function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
		
		console.log(income);
		$("#nominal_pemasukan").text(numberWithCommas(income) + ".000");
		
});


		
		
		
		
		
		
	});


document.onkeydown = function (e) {
		
			var kode = document.getElementById("form_nim").value
			console.log(kode.length)
			
			if ((kode.length == 8) && (state == 0)) {
				console.log("TRIGGERED")
				fetchdata();
				console.log(kode.length)
				$('.showinfo').transition('scale');
				state = 1;
			}
			else if (kode.length < 8) {
				if (state == 1) {
					$('.showinfo').transition('scale');
					state = 0;
				}
				else {
					$('.showinfo').transition('hide');	
				}
			}
			
			
		}
});