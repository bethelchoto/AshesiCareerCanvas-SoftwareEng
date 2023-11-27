<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 86400"); // 24 hours cache

include 'db.php'; 

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect JSON data from the request body
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);

    // Validate and sanitize the data (you might need to improve this based on your requirements)
    $projectName = mysqli_real_escape_string($conn, $data->projectName);
    $projectOwner = mysqli_real_escape_string($conn, $data->projectOwner);
    $startDate = mysqli_real_escape_string($conn, $data->startDate);
    $endDate = mysqli_real_escape_string($conn, $data->endDate);
    $projectDescription = mysqli_real_escape_string($conn, $data->projectDescription);
    $studentId = 123; // Replace with the actual student ID

    // Insert data into the 'project' table using prepared statements
    $sql = "INSERT INTO project (project_name, owner, start_date, end_date, project_description, student_id)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi", $projectName, $projectOwner, $startDate, $endDate, $projectDescription, $studentId);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Record inserted successfully"));
    } else {
        echo json_encode(array("error" => "Error: " . $stmt->error));
    }

    $stmt->close();
} else {
    echo json_encode(array("error" => "Invalid request method"));
}

// Close the database connection
$conn->close();
?>
