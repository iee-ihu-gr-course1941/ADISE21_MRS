<?php


/*function show_piece($x,$y) {
	global $mysqli;
	
	$sql = 'select * from board where x=? and y=?';
	$st = $mysqli->prepare($sql);
	$st->bind_param('ii',$x,$y);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
}
   
function move_piece($x,$y,$x2,$y2,$token) {
	
	if($token==null || $token=='') {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg'=>"token is not set."]);
		exit;
	}
	
	$color = current_color($token);
	if($color==null ) {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg'=>"You are not a player of this game."]);
		exit;
	}
	$status = read_status();
	if($status['status']!='started') {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg'=>"Game is not in action."]);
		exit;
	}
	if($status['p_turn']!=$color) {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg'=>"It is not your turn."]);
		exit;
	}
	$orig_board=read_board();
	$board=convert_board($orig_board);
	$n = add_valid_moves_to_piece($board,$color,$x,$y);
	if($n==0) {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg'=>"This piece cannot move."]);
		exit;
	}
	foreach($board[$x][$y]['moves'] as $i=>$move) {
		if($x2==$move['x'] && $y2==$move['y']) {
			do_move($x,$y,$x2,$y2);
			exit;
		}
	}
	header("HTTP/1.1 400 Bad Request");
	print json_encode(['errormesg'=>"This move is illegal."]);
	exit;
}*/

/*function show_board($input) {
	global $mysqli;
	
	$b=current_color($input['token']);
	if($b) {
		show_board_by_player($b);
	} else {
		header('Content-type: application/json');
		print json_encode(read_board(), JSON_PRETTY_PRINT);
	}
}*/




//έχει θέμα η function στον users -- δουλεύει μόνο τοπικά
//θα φέρει τις κάρτες από τον cards_for_moutzouris_reset
//στον cards_for_moutzouris
/* function reset_board_local()
{
	global $mysqli;
	$sql = 'call clean_deck()';
	$mysqli->query($sql);
} */


//new reset 

function reset_board() {
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

function read_board() { 
	global $mysqli;
	$sql = 'select * from cards_for_moutzouris';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
	//return($res->fetch_all(MYSQLI_ASSOC));
}


function read_deck1() { 
	global $mysqli;
	$sql = 'select * from deck1';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
	//return($res->fetch_all(MYSQLI_ASSOC));
}


function read_deck2() { 
	global $mysqli;
	$sql = 'select * from deck2';
	$st = $mysqli->prepare($sql);
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
	//return($res->fetch_all(MYSQLI_ASSOC));
}


//removes data from deck1, deck2 and cards_for_moutzouris
function deleteDecks() { 
	global $mysqli;
	$sql = 'delete from cards_for_moutzouris';
	$mysqli->query($sql);
	$sql = 'delete from deck1';
	$mysqli->query($sql);
	$sql = 'delete from deck2';
	$mysqli->query($sql);
	echo json_encode(array('message' => 'decks deleted'));
}


function delete_double_deck1(){
	global $mysqli;
	// Create query
	$query = 'DELETE FROM deck1 WHERE deck1.c_value IN 
	(SELECT c_value FROM deck1 GROUP BY c_value HAVING COUNT(*) = 2)';
	// Prepare statement
	$stmt = $mysqli->prepare($query);
	// Execute query
	$stmt->execute();
	if ($stmt->execute()) {
		echo json_encode(
			array('message' => 'Double Cards From Deck1 Deleted')
		);
	} else {
		echo json_encode(
			array('message' => 'Double Cards From Deck1 Not Deleted')
		);
	}
}

function delete_double_deck2(){
	global $mysqli;
	// Create query
	$query = 'DELETE FROM deck2 WHERE deck2.c_value IN 
	(SELECT c_value FROM deck2 GROUP BY c_value HAVING COUNT(*) = 2)';
	// Prepare statement
	$stmt = $mysqli->prepare($query);
	// Execute query
	$stmt->execute();
	if ($stmt->execute()) {
		echo json_encode(
			array('message' => 'Double Cards From Deck2 Deleted')
		);
	} else {
		echo json_encode(
			array('message' => 'Double Cards From Deck2 Not Deleted')
		);
	}
}

function pick_card1(){
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

function pick_card2(){
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


	


function dealCardsToPlayers() { 
	global $mysqli;
	//getting shuffled cards from cards_for_moutzouris_reset to cards_for_moutzouris
	$sql = 'INSERT INTO cards_for_moutzouris (SELECT * 
	FROM cards_for_moutzouris_reset ORDER BY RAND());';
	$mysqli->query($sql);
	//getting 0-20 cards from cards_for_moutzouris to deck1
	$sql = 'REPLACE INTO deck1 (SELECT * 
	FROM cards_for_moutzouris
	LIMIT 20 OFFSET 0);';
	$mysqli->query($sql);
	//getting 21-41 cards from cards_for_moutzouris to deck2
	$sql = 'REPLACE INTO deck2 (SELECT * 
	FROM cards_for_moutzouris
	LIMIT 21 OFFSET 20);';
	$mysqli->query($sql);
	echo json_encode(array('message' => 'Cards Dealt To Players'));
}

//show card by id
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

/* function show_card2($x, $y) {
	global $mysqli;
	
	$sql = "select * from cards_for_moutzouris where c_value=? and c_suit LIKE ?";
	$st = $mysqli->prepare($sql);
	$st->bind_param('i',$x);
	$st->bind_param('s','%');
	$st->execute();
	$res = $st->get_result();
	header('Content-type: application/json');
	print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
} */

	

/* function play($token)
{ //from move_piece
	//αν ο παίκτης δεν έχει token δεν πρέπει να μπορεί να παίξει
	if ($token == null || $token == '') {
		header("HTTP/1.1 400 Bad Request");
		print json_encode(['errormesg' => "token is not set."]);
		exit;
	}

	checks if valid player
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
} */


/*function convert_board(&$orig_board) {
	$board=[];
	foreach($orig_board as $i=>&$row) {
		$board[$row['x']][$row['y']] = &$row;
	} 
	return($board);
}*/





/*function show_board_by_player($b) {

	global $mysqli;

	$orig_board=read_board();
	$board=convert_board($orig_board);
	$status = read_status();
	if($status['status']=='started' && $status['p_turn']==$b && $b!=null) {
		// It my turn !!!!
		$n = add_valid_moves_to_board($board,$b);
		
		// Εάν n==0, τότε έχασα !!!!!
		// Θα πρέπει να ενημερωθεί το game_status.
	}
	header('Content-type: application/json');
	print json_encode($orig_board, JSON_PRETTY_PRINT);
}*/

/*function add_valid_moves_to_board(&$board,$b) {
	$number_of_moves=0;
	
	for($x=1;$x<9;$x++) {
		for($y=1;$y<9;$y++) {
			$number_of_moves+=add_valid_moves_to_piece($board,$b,$x,$y);
		}
	}
	return($number_of_moves);
}*/



/*function add_valid_moves_to_piece(&$board,$b,$x,$y) {
	$number_of_moves=0;
	if($board[$x][$y]['piece_color']==$b) {
		switch($board[$x][$y]['piece']){
			case 'P': $number_of_moves+=pawn_moves($board,$b,$x,$y);break;
			case 'K': $number_of_moves+=king_moves($board,$b,$x,$y);break;
			case 'Q': $number_of_moves+=queen_moves($board,$b,$x,$y);break;
			case 'R': $number_of_moves+=rook_moves($board,$b,$x,$y);break;
			case 'N': $number_of_moves+=knight_moves($board,$b,$x,$y);break;
			case 'B': $number_of_moves+=bishop_moves($board,$b,$x,$y);break;
		}
	} 
	return($number_of_moves);
}*/

/*function king_moves(&$board,$b,$x,$y) {
	$directions = [
		[1,0],
		[-1,0],
		[0,1],
		[0,-1],
		[1,1],
		[-1,1],
		[1,-1],
		[-1,-1]
	];	
	$moves=[];
	foreach($directions as $d=>$direction) {
		$i=$x+$direction[0];
		$j=$y+$direction[1];
		if ( $i>=1 && $i<=8 && $j>=1 && $j<=8 && $board[$i][$j]['piece_color'] != $b) {
			$move=['x'=>$i, 'y'=>$j];
			$moves[]=$move;
		}
	}
	$board[$x][$y]['moves'] = $moves;
	return(sizeof($moves));
}
function queen_moves(&$board,$b,$x,$y) {
	$directions = [
		[1,0],
		[-1,0],
		[0,1],
		[0,-1],
		[1,1],
		[-1,1],
		[1,-1],
		[-1,-1]
	];	
	return(bishop_rook_queen_moves($board,$b,$x,$y,$directions));

}
function rook_moves(&$board,$b,$x,$y) {
	$directions = [
		[1,0],
		[-1,0],
		[0,1],
		[0,-1]
	];	
	return(bishop_rook_queen_moves($board,$b,$x,$y,$directions));
}
function bishop_moves(&$board,$b,$x,$y) {
	$directions = [
		[1,1],
		[-1,1],
		[1,-1],
		[-1,-1]
	];	
	return(bishop_rook_queen_moves($board,$b,$x,$y,$directions));
}

function bishop_rook_queen_moves(&$board,$b,$x,$y,$directions) {
	$moves=[];

	foreach($directions as $d=>$direction) {
		for($i=$x+$direction[0],$j=$y+$direction[1]; $i>=1 && $i<=8 && $j>=1 && $j<=8; $i+=$direction[0], $j+=$direction[1]) {
			if( $board[$i][$j]['piece_color'] == null ){ 
				$move=['x'=>$i, 'y'=>$j];
				$moves[]=$move;
			} else if ( $board[$i][$j]['piece_color'] != $b) {
				$move=['x'=>$i, 'y'=>$j];
				$moves[]=$move;
				// Υπάρχει πιόνι αντιπάλου... Δεν πάμε παραπέρα.
				break;
			} else if ( $board[$i][$j]['piece_color'] == $b) {
				break;
			}
		}

	}
	$board[$x][$y]['moves'] = $moves;
	return(sizeof($moves));
}



function knight_moves(&$board,$b,$x,$y) {
	$m = [
		[2,1],
		[1,2],
		[2,-1],
		[1,-2],
		[-2,1],
		[-1,2],
		[-2,-1],
		[-1,-2],
	];
	$moves=[];
	foreach($m as $k=>$t) {
		$x2=$x+$t[0];
		$y2=$y+$t[1];
		if( $x2>=1 && $x2<=8 && $y2>=1 && $y2<=8 &&
			$board[$x2][$y2]['piece_color'] !=$b ) {
			// Αν ο προορισμός είναι εντός σκακιέρας και δεν υπάρχει δικό μου πιόνι
			$move=['x'=>$x2, 'y'=>$y2];
			$moves[]=$move;
		}
	}
	$board[$x][$y]['moves'] = $moves;
	return(sizeof($moves));
}

function pawn_moves(&$board,$b,$x,$y) {
	
	$direction=($b=='W')?1:-1;
	$start_row = ($b=='W')?2:7;
	$moves=[];
	
	$j=$y+$direction;
	if($j<=8 && $j>=1 && $board[$x][$j]['piece_color']==null) {
		$move=['x'=>$x, 'y'=>$j];
		$moves[]=$move;
		$j=$y+2*$direction;
		if($j<=8 && $j>=1 && $y==$start_row && $board[$x][$j]['piece_color']==null) {
			$move=['x'=>$x, 'y'=>$j];
			$moves[]=$move;
		}
	}
	$j=$y+$direction;
	if($j>=1 && $j<=8) {
		for($i=$x-1;$i<=$x+1;$i+=2) {
			if($i>=1 && $i<=8 && $board[$i][$j]['piece_color']!=null && $board[$i][$j]['piece_color']!=$b) {
				$move=['x'=>$i, 'y'=>$j];
				$moves[]=$move;
			}
		}
	}

	$board[$x][$y]['moves'] = $moves;
	return(sizeof($moves));
	
}

function do_move($x,$y,$x2,$y2) {
	global $mysqli;
	$sql = 'call `move_piece`(?,?,?,?);';
	$st = $mysqli->prepare($sql);
	$st->bind_param('iiii',$x,$y,$x2,$y2 );
	$st->execute();

	header('Content-type: application/json');
	print json_encode(read_board(), JSON_PRETTY_PRINT);
}*/


?>


