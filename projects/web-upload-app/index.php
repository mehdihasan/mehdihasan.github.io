<?php
// Inialize session
session_start();

// Check, if user is already login, then jump to secured page
if (isset($_SESSION['username'])) {
header('Location: form.php');
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title></title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<div class="wrapper">
		<div class="content">
			<div class="boxer">
				<h3>User Login</h3>
				<form method="POST" action="loginproc.php">
					<label class="prob1" for="name">Username:</label>
					<input type="text" name="username" /><br />
					<label class="prob1" for="pass">Password:</label>
					<input type="password" name="password" /><br />
					<input class="butto" type="submit" value="Login">
				</form>
			</div>
		</div>
	</div>
</body>
</html>
