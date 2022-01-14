<?php
//Headers needed to access rest api through http
header('Access-Control-Allow-Origin: *'); //Give access to everybody
header('Content-Type: application/json');

include_once '../config/Database.php'; //Bring in DB
include_once '../models/game_status.php';   //Bring in models


// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate game_status object
$g_status = new game_status($db);

// game_status query
$res = $g_status->handle_status();

// Get row count
$num = $res->rowCount();


if ($num > 0) {

    // game_status array
    $status_arr = array();
    $status_arr['data'] = array();

    //Loop through result
    while ($row = $res->fetch(PDO::FETCH_ASSOC)) { //Fetch it as an associative array
        extract($row);

        $status_item = array(
            'status' => $status,
            'turn' => $p_turn,
            'result' => $result,
            'last_change' => $last_change

        );


        // Push to "data"
        array_push($status_arr['data'], $status_item);
    }

    // Turn to JSON & output
    echo json_encode($status_arr, JSON_PRETTY_PRINT);
} else { //if num=0
    // No game_status
    echo json_encode(
        array('message' => 'No Status Found')
    );
}
