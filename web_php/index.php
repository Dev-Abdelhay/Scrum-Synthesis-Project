<?php
// Inclure la connexion
require_once 'db_config.php';

try {
    // Une simple requête pour tester
    $query = $conn->query("SELECT DATABASE()");
    $dbName = $query->fetchColumn();
    
    echo "<h1>Félicitations abdelhayy-ai !</h1>";
    echo "<p>Vous êtes bien connecté à la base de données : <strong>" . $dbName . "</strong></p>";
    echo "<p>Le projet <strong>Scrum-Synthesis-Project</strong> est prêt pour le développement.</p>";
} catch(PDOException $e) {
    echo "Erreur d'affichage : " . $e->getMessage();
}
?>