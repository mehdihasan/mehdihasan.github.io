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
  <title>Read User</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
<?php
	//connecting to mysql database
	include('dbconnect.php');

	//Fetching the given table name from database and show it
	$sql = "SELECT * FROM vvi_data";
	$result = mysqli_query($dbc, $sql)
			or die('Error querying database.');
?>
	<div class="wrapper">
		<div class="content">
			<p>Welcome <b><?php echo $_SESSION['username']; ?></b>!</p><br />
			<div class="boxer">
				<h3>Information Table</h3>
				<?php
					echo '<table border="1" cellspacing="2" cellpadding="2">';
						echo '<tr><th class="read-th">ID</th>';
						echo '<th class="read-th">Submission Date</th>';
						echo '<th class="read-th">Project Name</th>';
						echo '<th class="read-th">Filename</th>';
						echo '<th class="read-th">Download</th>';
						echo '<th class="read-th">Delete</th></tr>';
						while($row = mysqli_fetch_array($result)){
							echo '<tr><td class="read-td">'.$row['id'].'</td>';
							echo '<td class="read-td">'.$row['SubbmissionDate'].'</td>';
							echo '<td class="read-td">'.$row['ProjectName'].'</td>';
							echo '<td class="read-td">'.$row['FileName'].'</td>';
							echo '<td class="read-td">
								<form action="download.php" method="post">
									<input type="hidden" name="download_name" value="'.$row['FileName'].'" />
									<input type="hidden" name="download_id" value="'.$row['id'].'" />
									<input class="butto" type="submit" value="Download" />
								</form>
							</td>';
							echo '<td class="read-td">
								<form action="deleteRequest.php" method="post">
									<input type="hidden" name="delete_name" value="'.$row['FileName'].'" />
									<input class="butto" type="submit" value="Delete" />
								</form>
									</td></tr>';
						}
					echo "</table>";
				?>
			<br /><br />
			<p><a href="form.php">Click here</a> to go <b>home</b>!</p>
			</div>
			<p><a class='click' href='logout.php'>Logout</a></p>
		</div>
		
	</div>
<?php
	//closing database connection
	$dbc->close();
?>
</body>
</html>