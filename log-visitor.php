<?php
// Get the visitor's IP address
$visitor_ip = $_SERVER['REMOTE_ADDR'];

// Log the visitor's IP address and timestamp to a text file
$timestamp = date("Y-m-d H:i:s");
$log_entry = "$timestamp, $visitor_ip\n";
file_put_contents("visitor_log.txt", $log_entry, FILE_APPEND);
?>
