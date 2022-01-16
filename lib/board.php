<?php
 

//έχει θέμα η function στον users -- δουλεύει μόνο τοπικά
//θα φέρει τις κάρτες από τον cards_for_moutzouris_reset
//στον cards_for_moutzouris

function reset_board_local()
{
	global $mysqli;
	$sql = 'call clean_deck()';
	$mysqli->query($sql);
}


//new reset 
function reset_board()
{
	global $mysqli;
	$sql = 'UPDATE players SET p_username=NULL, token=NULL';
	$mysqli->query($sql);
	$sql = "UPDATE game_status SET status='not active', p_turn=NULL, result=NULL";
	$mysqli->query($sql);
	//καλεί και τη διαγραφή πινάκων καρτών
	deleteDecks();

	echo json_encode(
		array('message' => 'Board Reseted')
	);
}


//read deck cards_for_moutzouris
function read_board()
{
	global $mysqli;
	$sql = 'select * from cards_for_moutzouris';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
	return ($res->fetch_all(MYSQLI_ASSOC));
}

function read_deck1()
{
	global $mysqli;
	$sql = 'select * from deck1';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
	return ($res->fetch_all(MYSQLI_ASSOC));
}

function read_deck2()
{
	global $mysqli;
	$sql = 'select * from deck2';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
	return ($res->fetch_all(MYSQLI_ASSOC));
}

function delete_double_deck1()
{
	global $mysqli;
	// Deletes cards with same value that appear 4 times
	$query1 = 'DELETE FROM deck1 WHERE deck1.c_value IN 
	(SELECT c_value FROM deck1 GROUP BY c_value HAVING COUNT(*) = 4)';
	// Prepare statement
	$stmt1 = $mysqli->prepare($query1);

	// Execute query
	//$stmt1->execute();

	// Deletes cards with same value that appear 2 times
	$query2 = 'DELETE FROM deck1 WHERE deck1.c_value IN 
	(SELECT c_value FROM deck1 GROUP BY c_value HAVING COUNT(*) = 2)';

	$stmt2 = $mysqli->prepare($query2);

	// Execute query
	//$stmt2->execute();

	// Deletes 2 out of 3 cards that have the same value
	$query3 = 'DELETE FROM deck1
	WHERE c_id IN (
	SELECT c_id FROM (
		SELECT c_id, ROW_NUMBER() OVER (PARTITION BY c_value) AS rownum
		FROM deck1
		)AS sub 
		WHERE rownum >1
		);';

	$stmt3 = $mysqli->prepare($query3);

	// Execute query
	//$stmt3->execute();


	if ($stmt1->execute() and $stmt2->execute() and $stmt3->execute()) {
		echo json_encode(
			array('message' => 'Double Cards From Deck1 Deleted')
		);
	} else {
		echo json_encode(
			array('message' => 'Double Cards From Deck1 Not Deleted')
		);
	}
}

function delete_double_deck2()
{
	global $mysqli;
	// Deletes cards with same value that appear 4 times
	$query1 = 'DELETE FROM deck2 WHERE deck2.c_value IN 
	(SELECT c_value FROM deck2 GROUP BY c_value HAVING COUNT(*) = 4)';
	// Prepare statement
	$stmt1 = $mysqli->prepare($query1);

	// Execute query
	//$stmt1->execute();

	// Deletes cards with same value that appear 2 times
	$query2 = 'DELETE FROM deck2 WHERE deck2.c_value IN 
	(SELECT c_value FROM deck2 GROUP BY c_value HAVING COUNT(*) = 2)';

	$stmt2 = $mysqli->prepare($query2);

	// Execute query
	//$stmt2->execute();

	// Deletes 2 out of 3 cards that have the same value
	$query3 = 'DELETE FROM deck2
	WHERE c_id IN (
	SELECT c_id FROM (
		SELECT c_id, ROW_NUMBER() OVER (PARTITION BY c_value) AS rownum
		FROM deck2
		)AS sub 
		WHERE rownum >1
		);';

	$stmt3 = $mysqli->prepare($query3);

	// Execute query
	//$stmt3->execute();


	if ($stmt1->execute() and $stmt2->execute() and $stmt3->execute()) {
		echo json_encode(
			array('message' => 'Double Cards From Deck2 Deleted')
		);
	} else {
		echo json_encode(
			array('message' => 'Double Cards From Deck2 Not Deleted')
		);
	}
}

function pick_card1()
{
	global $mysqli;
	$sql = 'INSERT INTO deck1 (SELECT * FROM deck2 ORDER BY rand() LIMIT 1);';
	$st = $mysqli->prepare($sql);
	if ($st->execute()) {
		echo json_encode(array('message' => 'Card From Deck 2 Picked'));
	} else {
		echo json_encode(array('message' => 'Card From Deck 2 Not Picked'));
	}
	$sql2 = 'DELETE FROM deck2 WHERE EXISTS (SELECT * FROM deck1 WHERE deck1.c_id = deck2.c_id)';
	$st2 = $mysqli->prepare($sql2);
	$st2->execute();
	if ($st2->execute()) {
		echo json_encode(array('message' => 'Picked Card Deleted From Deck2'));
	} else {
		echo json_encode(array('message' => 'Picked Card Not Deleted From Deck2'));
	}
}

function pick_card2()
{
	global $mysqli;
	$sql = 'INSERT INTO deck2 (SELECT * FROM deck1 ORDER BY rand() LIMIT 1);';
	$st = $mysqli->prepare($sql);
	if ($st->execute()) {
		echo json_encode(array('message' => 'Card From Deck 1 Picked'));
	} else {
		echo json_encode(array('message' => 'Card From Deck 1 Not Picked'));
	}
	$sql2 = 'DELETE FROM deck1 WHERE EXISTS (SELECT * FROM deck2 WHERE deck2.c_id = deck1.c_id)';
	$st2 = $mysqli->prepare($sql2);
	$st2->execute();
	if ($st2->execute()) {
		echo json_encode(array('message' => 'Picked Card Deleted From Deck1'));
	} else {
		echo json_encode(array('message' => 'Picked Card Not Deleted From Deck1'));
	}
}

//removes data from deck1, deck2 and cards_for_moutzouris
function deleteDecks()
{
	global $mysqli;
	$sql1 = 'delete from cards_for_moutzouris';
	$mysqli->query($sql1);
	$sql2 = 'delete from deck1';
	$mysqli->query($sql2);
	$sql3 = 'delete from deck2';
	$mysqli->query($sql3);

	echo json_encode(array('message' => 'decks deleted'));
	
}



function dealCardsToPlayers()
{
		global $mysqli;
		$sql = 'SELECT * FROM cards_for_moutzouris';
		$st = $mysqli->prepare($sql);
		$st->execute();
		$res = $st->get_result();
		
		if ((mysqli_num_rows($res)) > 1){ //to avoid deal cards twice
			echo json_encode(array('message' => 'Cards Already Dealt To Players'));
			exit;
		}else if ((mysqli_num_rows($res)) < 1){
			//getting shuffled cards from cards_for_moutzouris_reset to cards_for_moutzouris
			$sql1 = 'INSERT INTO cards_for_moutzouris (SELECT * 
			FROM cards_for_moutzouris_reset ORDER BY RAND());';
			$mysqli->query($sql1);
			//getting 0-20 cards from cards_for_moutzouris to deck1
			$sql2 = 'REPLACE INTO deck1 (SELECT * 
			FROM cards_for_moutzouris
			LIMIT 20 OFFSET 0);';
			$mysqli->query($sql2);
			//getting 21-41 cards from cards_for_moutzouris to deck2
			$sql3 = 'REPLACE INTO deck2 (SELECT * 
			FROM cards_for_moutzouris
			LIMIT 21 OFFSET 20);';
			$mysqli->query($sql3);
			echo json_encode(array('message' => 'Cards Dealt To Players'));
		} 

}

function play($token)
{ //from move_piece
	//αν ο παίκτης δεν έχει token δεν πρέπει να μπορεί να παίξει
	if ($token == null || $token == '') {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg' => "token is not set."]);
		exit;
	}

	//checks if valid player
	$player = current_player($token);
	if ($player == null) {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg' => "You are not a player of this game."]);
		exit;
	}

	//αν δεν είναι started
	$status = read_status();
	if ($status['status'] != 'started') {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg' => "Game is not in action."]);
		exit;
	}

	//ελέγχει αν πάει να παίξει ο σωστός παίκτης στη σειρά του
	if ($status['p_turn'] != $player) {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg' => "It is not your turn."]);
		exit;
	}
}

?>