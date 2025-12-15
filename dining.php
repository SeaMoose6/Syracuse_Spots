<?php
include("database.php"); // connects to database
header('Content-Type: application/json');

// id mapping 
$hall_map = [
    0 => 'brockway',
    1 => 'ernie_davis',
    2 => 'graham',
    3 => 'orange',
    4 => 'sadler',
    5 => 'shaw'
];

// HANDLE GET (Loading stars & comments)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $output = [];
    
    // Initialize output structure
    foreach ($hall_map as $id => $name) {
        $output[$name] = ['avg' => 0, 'reviews' => []];
    }

    // Fetch Average Ratings
    $sql_avg = "SELECT spot_name, AVG(rating) as average_rating FROM spot_rating GROUP BY spot_name";
    $res_avg = mysqli_query($con, $sql_avg);
    while ($row = mysqli_fetch_assoc($res_avg)) {
        if (isset($output[$row['spot_name']])) {
            $output[$row['spot_name']]['avg'] = round($row['average_rating'], 1);
        }
    }

    // Fetch Text Reviews
    $sql_rev = "SELECT id, dining_review FROM reviews";
    $res_rev = mysqli_query($con, $sql_rev);
    while ($row = mysqli_fetch_assoc($res_rev)) {
        $hall_name = $hall_map[$row['id']] ?? null;
        if ($hall_name) {
            $output[$hall_name]['reviews'][] = $row['dining_review'];
        }
    }

    echo json_encode($output);
    exit;
}

// HANDLE POST (Saving new reviews & ratings)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $hall_name = $_POST['hall']; 
    $rating = intval($_POST['rating']); 
    $comment = $_POST['comment'];

    // Flip the map to find matching id 
    $name_to_id = array_flip($hall_map);
    $spot_id = $name_to_id[$hall_name] ?? 99;

    try {
        // Insert Rating
        $stmt_r = $con->prepare("INSERT INTO spot_rating (id, spot_name, rating) VALUES (?, ?, ?)");
        $stmt_r->bind_param("isi", $spot_id, $hall_name, $rating);
        $stmt_r->execute();

        // Insert Review Text
        $stmt_t = $con->prepare("INSERT INTO reviews (id, dining_review) VALUES (?, ?)");
        $stmt_t->bind_param("is", $spot_id, $comment);
        $stmt_t->execute();
        echo json_encode(['success' => true]);
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
    exit;
}
?>