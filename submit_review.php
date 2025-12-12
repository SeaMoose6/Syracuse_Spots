<?php
// submit_review.php
// Handles saving reviews to ratings.txt and comments to a reviews file

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$hall = $_POST['hall'] ?? '';
$rating = (int)($_POST['rating'] ?? 0);
$comment = trim($_POST['comment'] ?? '');

// Validate input
if (!$hall || $rating < 1 || $rating > 5 || empty($comment)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

// Validate hall name
$validHalls = ['brockway', 'ernie_davis', 'graham', 'orange', 'sadler', 'shaw'];
if (!in_array($hall, $validHalls)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid dining hall']);
    exit;
}

try {
    // Path to ratings.txt file
    $ratingsFile = __DIR__ . '/ratings.txt';
    
    if (!file_exists($ratingsFile)) {
        throw new Exception('Ratings file not found');
    }

    // Read current ratings
    $content = file_get_contents($ratingsFile);
    $lines = explode("\n", $content);
    $updated = false;

    // Update or create the hall's rating line
    $newLines = [];
    foreach ($lines as $line) {
        $line = trim($line);
        if (empty($line)) continue;
        
        if (strpos($line, $hall . '=') === 0) {
            // Append the new rating to existing ratings
            $newLines[] = $line . ',' . $rating;
            $updated = true;
        } else {
            $newLines[] = $line;
        }
    }

    // If hall wasn't found, create a new entry
    if (!$updated) {
        $newLines[] = $hall . '=' . $rating;
    }

    // Write back to file
    $newContent = implode("\n", $newLines) . "\n";
    if (!file_put_contents($ratingsFile, $newContent)) {
        throw new Exception('Failed to write ratings file');
    }

    // Save comment to reviews file
    $reviewsFile = __DIR__ . '/reviews.txt';
    $timestamp = date('Y-m-d H:i:s');
    $reviewEntry = $timestamp . ' | ' . $hall . ' | ' . $rating . '/5 | ' . $comment . "\n";
    
    if (!file_put_contents($reviewsFile, $reviewEntry, FILE_APPEND)) {
        throw new Exception('Failed to write reviews file');
    }

    echo json_encode(['success' => true, 'message' => 'Review saved successfully']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
