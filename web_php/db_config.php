<?php
$host = "localhost";
$dbname = "gestion_projet_scrum";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connexion réussie !"; 
} catch(PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>