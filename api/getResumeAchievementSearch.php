<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

include 'db.php'; 

// Check if the request method is GET
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Assuming you are passing achievement_id as a query parameter
    $achievement_id = isset($_GET['achievement_id']) ? intval($_GET['achievement_id']) : null;

    if ($achievement_id === null) {
        echo json_encode(array("error" => "Invalid or missing achievement ID"));
        exit;
    }

    // Fetch achievement data for the given achievement_id
    $sql = "SELECT * FROM achievement WHERE achievement_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $achievement_id);
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();

        // Fetch the result as an associative array
        $achievementData = $result->fetch_all(MYSQLI_ASSOC);


        if (empty($achievementData)) {
            echo json_encode(array("message" => "No achievement data found for the given achievement ID"));
        } else {
            echo json_encode($achievementData);
        }
    } else {
        echo json_encode(array("error" => "Error: " . $stmt->error, "sql" => $sql));
    }

    $stmt->close();
} else {
    echo json_encode(array("error" => "Invalid request method"));
}

// Close the database connection
$conn->close();
?>
