<?php
// Inialize session
session_start();

// Check, if username session is NOT set then this page will jump to login page
if (!isset($_SESSION['username'])) {
header('Location: index.php');
}

//connecting to database
include("dbconnect.php");

$file_name = $_FILES['file']['name'];
$new_file_name = uniqid().$file_name;

//This is the directory where images will be saved
$target = $_SERVER['localhost']."/home/joomaps/public_html/demo/mehdi_important/files/";
$target = $target . basename($new_file_name);

//This gets all the other information from the form
$projectName = $_POST['nameProject'];
$submissionDate = date("d/m/Y");

//Writes the file to the server
if(move_uploaded_file($_FILES['file']['tmp_name'], $target))
{
	//Writes the information to the database
	$dbc->query("INSERT INTO vvi_data (SubbmissionDate,ProjectName,FileName)
	VALUES ('$submissionDate', '$projectName', '$new_file_name')") or die('Error querying to MySQL server.');;

	//Tells you if its all ok
	echo "The file ". basename( $_FILES['file']['name']). " has been uploaded, and your information has been added to the directory";
	echo "<p><a href='read.php'>Click</a> here to see the <b>database</b>!</p>";
	echo "<p><a href='form.php'>Click</a> here to go <b>home</b>!</p>";
	echo "<p><a class='but' href='logout.php'>Logout</a></p>";
} else 
{
	//Gives and error if its not
	echo "Sorry, there was a problem uploading your file.";
        echo "<p><a href='read.php'>Click here</a> to see the <b>database</b>!</p>";
	echo "<p><a href='form.php'>Click here</a> to go <b>home</b>!</p>";
	echo "<p><a class='but' href='logout.php'>Logout</a></p>";
}

$dbc->close();
?>