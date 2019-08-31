<?php
	// Inialize session
	session_start();

	// Check, if username session is NOT set then this page will jump to login page
	if (!isset($_SESSION['username'])) {
	header('Location: index.php');
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Delete Request</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>

<?php
//connecting to database
include('dbconnect.php');

//collecting the name to delete
$del_name = $_POST['delete_name'];

//checking if the file exist in directory
$target = $_SERVER['localhost']."/home/joomaps/public_html/demo/mehdi_important/files/";
$target_file = $target.basename($del_name);

//checking if the file exist in database
$check_del_name = $dbc->query("SELECT FileName FROM vvi_data WHERE FileName = '$del_name'") 
			or die('Error querying database.');
$check2_del_name = mysqli_num_rows($check_del_name);

//Fetching the given name into a variable
$sql = "SELECT FileName FROM vvi_data WHERE FileName = '$del_name'";
$result = mysqli_query($dbc, $sql)
		or die("Error querying database.");

//Checking if the file exis or not. If exist ti will ask quistion
if ($check2_del_name == 1 && file_exists($target_file)){
	echo "<div class='wrapper'><div class='content'><div class='boxer'><h3>Do you really want to delete the file?</h3>";
	while($row = mysqli_fetch_array($result)){
		echo "<form action='delete.php' method='post'>
				<input type='hidden' name='delete_file' value='".$row['FileName']."' />
				<input class='butto' type='submit' value='Yes' />
			 </form>
			 <br />
			 <a class='butto' href='read.php'>No</a></div><p><a class='but' href='logout.php'>Logout</a></p></div></div>";
	}
	
} else {
	echo "<div class='wrapper'><div class='content'><div class='boxer'>No such files exists!</div><p><a class='but' href='logout.php'>Logout</a></p></div></div>";
}

//closing database connection
$dbc->close();
?>
</body>
</html>