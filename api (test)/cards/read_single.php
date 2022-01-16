<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php'; //Bring in DB
include_once '../models/cards_for_moutzouris.php';   //Bring in models

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate cards object
$cards = new cards_for_moutzouris($db);

// Get ID
$cards->id = isset($_GET['id']) ? $_GET['id'] : die();

// Get cards
$cards->read_single();

// Create array
$cards_arr = array(
    'id' => $cards->c_id,
    'name' => $cards->c_name,
    'value' => $cards->c_value,
    'suit' => $cards->c_suit,
    'image' => $cards->c_url
);

// Make JSON
print_r(json_encode($cards_arr, JSON_PRETTY_PRINT));
