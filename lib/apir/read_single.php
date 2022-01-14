<?php
require "dbconnect.php";


show_card(($_GET['id']));

function show_card($x) {
	global $mysqli;
	
	$sql = 'select * from cards_for_moutzouris where c_id=?';
	$st = $mysqli->prepare($sql);
	$st->bind_param('i',$x);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
}

?>