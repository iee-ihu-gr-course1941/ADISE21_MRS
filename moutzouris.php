<?php
require_once "./lib/dbconnect.php";
require_once "./lib/board.php";
require_once "./lib/game.php";
require_once "./lib/users.php";


$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);


if($input==null) {
    $input=[];
}
if(isset($_SERVER['HTTP_X_TOKEN'])) {
    $input['token']=$_SERVER['HTTP_X_TOKEN'];
} else {
    $input['token']='';
}


// header("Content-Type: text/plain");
// print "method=$method\n";
// print "Path_info=".$_SERVER['PATH_INFO']."\n";
// print_r($request);


switch ($r=array_shift($request)) {
    //gettings all cards shuffled from cards_from_moutzouris
    case 'board' : 
        switch ($b=array_shift($request)) {
            case '':
            case null: handle_board($method,/* $input */);
                        break;
            /* case 'card': handle_card($method, $request[0],$request[1],$input);
                        break; */
	        default: header("HTTP/1.1 404 Not Found");
                            break;
			}
            break;
    case 'status': 
        if(sizeof($request)==0) {handle_status($method);}
        else {header("HTTP/1.1 404 Not Found");}
        break;
	case 'players': handle_player($method, $request,$input);
			break;
    case 'reset': reset_board();
        break;     
    case 'deleteDecks': deleteDecks(); //removes data from deck1, deck2 and cards_for_moutzouris
        break;          
    case 'dealCards': dealCardsToPlayers(); //deals cards to deck1 and deck2
        break; 
    case 'deck1': read_deck1(); //reads cards from deck1
        break; 
    case 'deck2': read_deck2(); //reads cards from deck2
        break;
    case 'card': handle_card($method, $request[0],$request[1],$input);
        break;
    case 'cardid': show_card($request[0]); //shows cards with id ?
        break;
<<<<<<< Updated upstream
	default:  header("HTTP/1.1 404 Not Found");
                        exit;
    }
=======
    case 'delete1':
        delete_double_deck1(); //deletes double cards (cards with same value and name) from deck1
        break;
    case 'delete2':
        delete_double_deck2(); //deletes double cards (cards with same value and name) from deck2
        break;
    case 'pick1':
        pick_card1(); //inserts a random card from deck2 to deck1 and then deletes that card from deck2
        break;
    case 'pick2':
        pick_card2(); //inserts a random card from deck1 to deck2 and then deletes that card from deck1
        break;
    default:
        header("HTTP/1.1 404 Not Found");
        exit;
}

/* function show1(){
    
} */

>>>>>>> Stashed changes



function handle_board($method/*,$input*/) {
    if($method=='GET') {
            //show_board($input);
            read_board();
    } else if ($method=='POST') {
            reset_board();
            //show_board($input);
    } else {
        header('HTTP/1.1 405 Method Not Allowed');
    }
    
}

function handle_card($method,$x,$y,$input) {
	if($method=='GET') {
        show_card2($x, $y);
    }else {
        header("HTTP/1.1 400 Bad Request"); 
        print json_encode(['errormesg'=>"Method $method not allowed here."]);
    }
}
    

    function handle_player($method, $p,$input) {
        switch ($b=array_shift($p)) {
            case '':
            case null: if($method=='GET') {show_users($method);}
                    else {header("HTTP/1.1 400 Bad Request"); 
                            print json_encode(['errormesg'=>"Method $method not allowed here."]);}
                    break;
            case 'p1': 
            case 'p2': 
                handle_user($method, $b,$input);
                        break;
            default: header("HTTP/1.1 404 Not Found");
                    print json_encode(['errormesg'=>"Player $b not found."]);
                    break;
        }
    }

function handle_status($method) {
    if($method=='GET') {
        show_status();
    } else {
        header('HTTP/1.1 405 Method Not Allowed');
    }
}
?>
