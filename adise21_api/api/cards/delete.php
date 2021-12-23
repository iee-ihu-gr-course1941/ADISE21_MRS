<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/cards_for_moutzouris.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate cards object
$cards = new cards_for_moutzouris($db);

// Delete cards
if ($cards->delete()) {
    echo json_encode(
        array('message' => 'Double cards Deleted')
    );
} else {
    echo json_encode(
        array('message' => 'Double cards Not Deleted')
    );
}
