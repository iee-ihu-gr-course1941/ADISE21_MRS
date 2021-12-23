<?php
//Headers needed to access rest api through http
header('Access-Control-Allow-Origin: *'); //Give access to everybody
header('Content-Type: application/json');

include_once '../../config/Database.php'; //Bring in DB
include_once '../../models/cards_for_moutzouris.php';   //Bring in models

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$cards = new cards_for_moutzouris($db);

// Blog post query
$result = $cards->deal_cards();

// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) { //>0 means there is post

    // Cards array
    $cards_arr = array();
    $cards_arr['data'] = array();

    //Loop through result
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) { //Fetch it as an associative array
        extract($row);

        $cards_item = array(
            'id' => $c_id,
            'name' => $c_name,
            'value' => $c_value,

        );


        // Push to "data"
        //array_push($posts_arr, $post_item);
        array_push($cards_arr['data'], $cards_item);
    }

    // Turn to JSON & output
    echo json_encode($cards_arr);
} else { //if num=0
    // No Posts
    echo json_encode(
        array('message' => 'No Cards Found')
    );
}
