<?php

// Inialize session
session_start();

// Check, if username session is NOT set then this page will jump to login page
if (!isset($_SESSION['username'])) {
header('Location: index.php');
}
 
//connecting to database
include('dbconnect.php');

//collecting the name to delete
$del_file = $_POST['delete_file'];
	
//Fetching and deleting the row which contains the file
$sql = "DELETE FROM vvi_data WHERE FileName = '$del_file'";
$result = $dbc->query($sql)
		or die('Error querying database.');

//checking if the file exist in directory
$target = $_SERVER['localhost']."/home/joomaps/public_html/demo/mehdi_important/files/";
$target_file = $target.basename($del_file);

//delete target file
if (unlink("$target_file")){
	echo "You have sucessfully delete file ".$del_file;
	echo "<p><a href='read.php'>Click here</a> to return <b>database</b>!</p>";
	echo "<p><a href='index.html'>Click here</a> to return <b>home</b>!</p>";
        echo "<p><a class='but' href='logout.php'>Logout</a></p>";
} else {
	echo "There are some problem when deleting file";
	echo "<p><a href='read.php'>Click here</a> to return <b>database</b>!</p>";
	echo "<p><a href='index.html'>Click here</a> to return <b>home</b>!</p>";
        echo "<p><a class='but' href='logout.php'>Logout</a></p>";
}
?>