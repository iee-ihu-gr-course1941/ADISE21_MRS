<?php

require "../lib/dbconnect.php";
//echo "ok";

read_deck();

function read_deck() {
	global $mysqli;
	$sql = 'select * from cards_for_moutzouris ORDER BY rand()';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC),JSON_PRETTY_PRINT);
}




/*$stmt = $mysqli->prepare('SELECT * FROM cards_for_moutzouris ORDER BY rand()');
$stmt->execute();
$res = $stmt->get_result();
$r = $res->fetch_all(MYSQLI_ASSOC);
header('Content-type: application/json');
print json_encode($r, JSON_PRETTY_PRINT);*/
?>