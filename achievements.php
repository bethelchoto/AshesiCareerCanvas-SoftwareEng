<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 86400"); // 24 hours cache

include 'db.php'; // Include your database connection file

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect JSON data from the request body
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);

    // Validate and sanitize the data (you might need to improve this based on your requirements)
    $achievement_name = mysqli_real_escape_string($conn, $data->achievement_name);
	$organization_name = mysqli_real_escape_string($conn, $data->organization_name);
	$year_attained = mysqli_real_escape_string($conn, $data->year_attained);
	


    if (empty($achievement_name) || empty($organization_name) || empty($year_attained)) {
		echo 'Please fill in all fields.';
	} else {
		$query = "INSERT INTO achievement(achievement_name, organization_name, year_attained) VALUES ('$achievement_name', '$organization_name', '$year_attained')";
            
        if (mysqli_query($conn, $query)) {
            echo 'Form submitted successfully!';
        } else {
                echo 'Error submitting form.';
        }
	}
		
mysqli_close($conn);

}

?>

