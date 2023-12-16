<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Add this line
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 86400"); // 24 hours cache


include 'db.php'; 

  const cors = require('cors');
  app.use(
    cors({
      origin:"http://localhost:3000"

    })
  );

  if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    // Respond to preflight request
    header("HTTP/1.1 200 OK");
    exit();
}

// Check if the request method is POST
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     // Collect JSON data from the request body
//     $json_data = file_get_contents("php://input");
//     $data = json_decode($json_data);

//     // Validate and sanitize the data (you might need to improve this based on your requirements)
//     $project_id = intval($data->project_id);
//     $project_name = mysqli_real_escape_string($conn, $data->project_name);
//     $project_owner = mysqli_real_escape_string($conn, $data->project_owner);
//     $start_date = mysqli_real_escape_string($conn, $data->start_date);
//     $end_date = mysqli_real_escape_string($conn, $data->end_date);
//     $project_description = mysqli_real_escape_string($conn, $data->project_description);
//     $project_descriptionone = mysqli_real_escape_string($conn, $data->project_descriptionone);
//     $project_descriptiontwo = mysqli_real_escape_string($conn, $data->project_descriptiontwo);
    
//     // Update data in the 'education' table using prepared statements
//         $sql = "UPDATE project SET project_name=? WHERE project_id=?";
//     // $sql = "UPDATE project SET project_name=?, project_owner=?, start_date=?, end_date=?, project_description=?, project_descriptionone=?, project_descriptiontwo=? WHERE project_id=?";
//     $stmt = $conn->prepare($sql);

//     $stmt->bind_param("s", $project_name);

//     // $stmt->bind_param("ssssi", $projectName, $owner, $startDate, $endDate,$projectDescription, $projectId);

//     if ($stmt->execute()) {
//         echo json_encode(array("message" => "Record"));
//     } else {
//         echo json_encode(array("error" => "Error: " . $stmt->error));
//     }

//     $stmt->close();
// } 
else {
    echo json_encode(array("error" => "Invalid request method"));
}

// Close the database connection
$conn->close();
?>
