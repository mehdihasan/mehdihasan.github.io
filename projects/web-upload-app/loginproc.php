<?php

// Inialize session
session_start();

// Include database connection settings
include('dbconnect.php');
$name = $dbc->real_escape_string($_POST['username']);
$pass = $dbc->real_escape_string($_POST['password']);

// Retrieve username and password from database according to user's input
$login = $dbc->query("SELECT * FROM use_info WHERE (name = '$name') and (pass = '$pass')");

// Check username and password match
if (mysqli_num_rows($login) == 1) {
// Set username session variable
$_SESSION['username'] = $_POST['username'];
// Jump to secured page
header('Location: form.php');
}
else {
// Jump to login page
header('Location: index.php');
}

?>