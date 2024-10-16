<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "mysql"; // Use the service name defined in docker-compose
$username = "root"; // Default username for MySQL
$password = getenv('MYSQL_ROOT_PASSWORD'); // Use the root password defined in docker-compose
$dbname = getenv('MYSQL_DATABASE'); // Use the database name defined in docker-compose

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
