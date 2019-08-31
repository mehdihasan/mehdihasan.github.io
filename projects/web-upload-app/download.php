<?php
// Inialize session
session_start();

// Check, if username session is NOT set then this page will jump to login page
if (!isset($_SESSION['username'])) {
header('Location: index.php');
}

$path = $_SERVER['localhost']."/home/joomaps/public_html/demo/mehdi_important/files/"; // change the path to fit your websites document structure
$fullPath = $path.$_POST['download_name'];

if (@$fd = fopen ($fullPath, "r")) {
    $fsize = filesize($fullPath);
    $path_parts = pathinfo($fullPath);
    $ext = strtolower($path_parts["extension"]);
    switch ($ext) {
		case "txt":
        header("Content-type: application/txt"); // add here more headers for diff. extensions
        header("Content-Disposition: attachment; filename=\"".$path_parts["basename"]."\""); // use 'attachment' to force a download
        break;
		case "doc":
        header("Content-type: application/doc"); // add here more headers for diff. extensions
        header("Content-Disposition: attachment; filename=\"".$path_parts["basename"]."\""); // use 'attachment' to force a download
        break;
		case "png":
        header("Content-type: application/png"); // add here more headers for diff. extensions
        header("Content-Disposition: attachment; filename=\"".$path_parts["basename"]."\""); // use 'attachment' to force a download
        break;
		case "zip":
        header("Content-type: application/zip"); // add here more headers for diff. extensions
        header("Content-Disposition: attachment; filename=\"".$path_parts["basename"]."\""); // use 'attachment' to force a download
        break;
        case "pdf":
        header("Content-type: application/pdf"); // add here more headers for diff. extensions
        header("Content-Disposition: attachment; filename=\"".$path_parts["basename"]."\""); // use 'attachment' to force a download
        break;
        default;
        header("Content-type: application/octet-stream");
        header("Content-Disposition: filename=\"".$path_parts["basename"]."\"");
    }
    header("Content-length: $fsize");
    header("Cache-control: private"); //use this to open files directly
    while(!feof($fd)) {
        $buffer = fread($fd, 8388608);
		echo $buffer;
		echo "<p><a href='read.php'>Click here</a> to see the <b>database</b>!</p>";
		echo "<p><a href='form.php'>Click here</a> to go <b>home</b>!</p>";
		echo "<p><a class='but' href='logout.php'>Logout</a></p>";
	}
}
@fclose ($fd);
exit;
?>