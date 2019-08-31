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
	<div class="wrapper">
		<div class="content">
			<p>Welcome <b><?php echo $_SESSION['username']; ?></b>!</p><br />
			<div class="boxer">
				<h3>You know what is it!</h3>
				<form method="post" action="addFile.php" enctype="multipart/form-data">
					<label class="prob1" for="name">Project Name:</label>
					<input type="text" name="nameProject" /><br />				
					<label class="prob1" for="file">File: (<8 MB)</label>
					<input type="hidden" name="size" value="8388608" />
					<input type="file" name="file" /> 
					<br/>
					<br/>
					<input TYPE="submit" name="upload" title="Add data to the Database" value="Add File"/>
				</form>
				<br /><br />
				<p><a href="read.php">Click here</a> to see the <b>database</b>!</p>
			</div>
			<p><a class="click" href="logout.php">Logout</a></p>
		</div>
	</div>
</body>
</html>