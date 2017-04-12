<?php

	//asrama.esy.es DB Config Settings
	
	/*
	$servername = "mysql.idhostinger.com";
	$db_username = "u544468788_user";
	$db_password = "romegostailor";

	$conn = new mysqli($servername, $db_username, $db_password, "u544468788_sia");
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	*/

	
	
	//localhost DB Config Settings
	
	$servername = "localhost";
	$db_username = "root";
	$db_password = "root";

	$conn = new mysqli($servername, $db_username, $db_password, "asrama");
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
  



?>	