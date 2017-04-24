// Currency number formatter
// Input : 500000
// Output : 500.000
function currencyFormatter(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
  
//fetching complete user data from NIM key	
function fetchUserData() {
	var nim = document.getElementById("form_nim").value;
	var xhr = new XMLHttpRequest();
	var formData = new FormData();
	formData.append("nim" , nim);
	xhr.open("post","fetch.php");
	xhr.send(formData);
	xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		var fetchedData =JSON.parse(xhr.responseText);
		document.getElementById("nama_penghuni").innerHTML = fetchedData.nama;
		document.getElementById("asrama").innerHTML = fetchedData.asrama;
		document.getElementById("kode_kamar").innerHTML = fetchedData.kamar;
		}
	}	
};
	
// Show success notification after succesful DB insertion
function showSuccessNotification()  {
	$('#notif_ok').transition('scale');	
	$("#form_nim").focus();
	$('.showinfo').transition('hide');
}

	
//insert transaction into the database
function addTransaction() {
	
	// Send data to database via AJAX
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

	// When success, reset the form and show notification
	xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		$('#notif_ok').transition('scale');	
		console.log(xhr.responseText);
		document.getElementById("form_pembayaran").reset();
		window.setTimeout(showSuccessNotification, 2500);
	}};
};

//Executed once page load done
$(document).ready(function() {

	var state = 0;
	// Calendar initialization
	$('#tanggal_transfer').calendar({type: 'date'});

	// Dropdown initialization
	$('.ui.dropdown').dropdown("set value","Mandiri");

	// Hide some elements.
	$('.showinfo').transition('hide');
	$('#notif_ok').transition('hide');
	$('#modul_laporan_bulanan').transition('hide');
	$('#modul_laporan_asrama').transition('hide');
	$('#modul_laporan_penghuni').transition('hide');			

	// Prevent page refresh when submitting form
	$(".form").submit(function(e) {return false;});

	// Prevent page refresh when clicking link
	$( ".tab_navigation_item" ).click(function(event) {
		console.log(event);
		event.preventDefault();
		$(".tab_navigation_item").removeClass("selected");
		$(this).addClass("selected");
	});

	//Tab Controller : Input Data
	$("#tab_input_data").click(function(){
		$("#modul_laporan_bulanan").transition('hide');
		$("#modul_laporan_asrama").transition('hide');
		$("#modul_laporan_penghuni").transition('hide');
		$("#modul_input_data").transition('scale');	
	});


	//Tab Controller : Laporan Bulanan
	$("#lap_bulanan").click(function() {
		$("#modul_input_data").transition('hide');
		$("#modul_laporan_asrama").transition('hide');
		$("#modul_laporan_penghuni").transition('hide');
		$("#modul_laporan_bulanan").transition('scale');
		$(".rm").remove();
		$.get('fetchreport.php', function(responseText) {
			var income = 0;
			var fetchedData =JSON.parse(responseText);	
			fetchedData.forEach( function(item) {
				var template_string;
				template_string = "<tr class='rm'><td><h3>" + item.Nama + "</h4></td><td><a class='ui green image label'>" + item.Asrama;
				template_string += "<div class='detail' id='kode_kamar'>" + item.Kamar +"</div></a></td></a></td><td><a class='ui blue image label'>"
				template_string += item.Bank + "</a></td><td><b><h3>" + currencyFormatter(item.Nominal) + ".000</h3></b></td>"
				template_string += "<td>" + item.Tanggal + "</td></tr>"
				income += parseInt(item.Nominal);
				$("#tabel_lap_bulanan > tbody:last-child" ).append(template_string);
			});		
			$("#nominal_pemasukan").text(currencyFormatter(income) + ".000");
		});
	});


	//Tab Controller : Lap Penghuni
	$("#lap_penghuni").click(function() {
		$("#modul_input_data").transition('hide');
		$("#modul_laporan_asrama").transition('hide');
		$("#modul_laporan_bulanan").transition('hide');
		$("#modul_laporan_penghuni").transition('scale');
		$(".rm").remove();
		$.get('fetchreport_tunggak2.php', function(responseText) {
			var income = 0;
			var fetchedData =JSON.parse(responseText);
			console.log(fetchedData)	
			fetchedData.forEach( function(item) {
				var template_string;
				template_string = "<tr class='rm'><td><h3>" + item.nama + "</h4></td><td><a class='ui green image label'>" + item.asrama;
				template_string += "<div class='detail' id='kode_kamar'>" + item.kamar +"</div></a></td></a>"
				template_string += "<td><b><h3>" + currencyFormatter(item.tunggakan) + ".000</h3></b></td>"
				template_string += "</tr>"
				income += parseInt(item.Nominal);
				$("#tabel_lap_penghuni > tbody:last-child" ).append(template_string);
				console.log("lol!")
			});		
		});
	});


	//Tab Controller : Laporan Asrama
	$("#lap_asrama").click(function() {
		$("#modul_input_data").transition('hide');
		$("#modul_laporan_bulanan").transition('hide');
		$("#modul_laporan_penghuni").transition('hide');
		$("#modul_laporan_asrama").transition('scale');
		$(".rm").remove();
		$.get('fetchreport_tunggak.php', function(responseText) {
			var income = 0;
			var fetchedData =JSON.parse(responseText);
			console.log(fetchedData)	
			fetchedData.forEach( function(item) {
				var template_string;
				template_string = "<tr class='rm'><td><h3>" + item.asrama + "</h4></td><td><h3>"
				template_string += currencyFormatter(item.nominal) + ".000" +"</h3></td>"
				template_string += "<td class ='"+ item.asrama  + "'></td></tr>"
				income += parseInt(item.Nominal);
				$("#tabel_lap_asrama > tbody:last-child" ).append(template_string);
			});		
			$("#nominal_pemasukan").text(currencyFormatter(income) + ".000");

			$.get('fetchreport_bayar.php', function(responseText) {
				var income = 0;
				var fetchedData =JSON.parse(responseText);
				console.log(fetchedData)	
				fetchedData.forEach( function(item) {
					$("." + item.asrama).html("<h3>" + currencyFormatter(item.nominal) + ".000 </h3>")
				});		
			});
		});
	});


	// Detect NIM Form Completion
	document.onkeydown = function (e) {
		var kode = document.getElementById("form_nim").value
		console.log(kode.length)
		
		if ((kode.length == 8) && (state == 0)) {
			console.log("TRIGGERED")
			fetchUserData();
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