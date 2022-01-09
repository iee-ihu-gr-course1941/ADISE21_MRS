<?php
require_once "../lib/dbconnect.php";
require_once "../lib/moutzouris.php";
require_once "../lib/board.php";
require_once "../lib/game.php";
require_once "../lib/users.php";

//$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
//$input = json_decode(file_get_contents('php://input'),true);

$p2 = "testr";
$id = "p2";

$.ajax({
    url: "new.php/players/p2", 
    method: 'PUT',
    dataType: "json",
    //headers: {"X-Token": me.token},
    contentType: 'application/json',
    data: {
        p_username: $p2, 
        p_id: $id
    },
    success: login_result,
    error: login_error
});
//alert('username ok');


?>