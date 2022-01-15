var me={token:null,p_id:null};
var game_status={};
var board={};
var last_update=new Date().getTime();
var timer=null;
var d1;
var d2;

// js from RITA

$(function () {
	//draw_empty_board();
	//fill_board();
	$('#deck_div').hide();
	$('#moutzouris_start').hide();
	$('#moutzouris_dealCards').hide();
	$('.play_buttons').hide();

	$('#moutzouris_restart').click(reset_board); //----added from main
	$('#moutzouris_login').click( login_to_game);
	$('#moutzouris_reset').click( reset_board);
	$('#moutzouris_dealCards').click(dealCards);
	//$('#moutzouris_dealCards').click(fill_deck);
	$('#moutzouris_start').click(show_empty_decks);
	//$('#moutzouris_start').click(showDecks);
	$('#delete1').click(delete1); //----added from main
	$('#delete2').click(delete2);//----added from main
	$('#pick1').click(pick1);//----added from main
	$('#pick2').click(pick2);//----added from main
	//$('#do_move').click( do_move);
	//$('#move_div').hide();
	
	game_status_update();
	//$('#the_move_src').change( update_moves_selector);
	//$('#do_move2').click( do_move2);
});

//εμφανίζει-μοιράζει τις κάρτες στους παίκτες
/* const dealCards = async function(){
	
    try {
         await fetch('http://localhost/ADISE21_MRS/moutzouris.php/dealCards'); 
         const res1=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck1');
         const res2=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck2');   

		var json = await res1.json();
		var images = '';
		//alert(json.length/7);
		for( var i = 0; i < 20; ++i ) {
			images += '<img src="' + json[i]['c_url'] +'" />';
		}	
		document.getElementById('p1').innerHTML = images; 

		var json = await res2.json();
		var images = '';
		//alert(json.length/7);
		for( var i = 0; i < 21; ++i ) {
			images += '<img src="' + json[i]['c_url'] +'" />';
		}
		
		document.getElementById('p2').innerHTML = images; 
		
		if(!res1.ok) throw new Error(`${data1.message}`);
         if(!res2.ok) throw new Error(`${data2.message}`);  
    }catch (err){
        alert(err)
    }
	$('.play_buttons').show();
	$('#moutzouris_dealCards').hide();
}; */




function reset_board() {
	$.ajax({url: "moutzouris.php/reset" , headers: {"X-Token": me.token}, method: 'POST' /* ,  success: fill_board_by_data */ });
	//$('#move_div').hide();
	$('#deck_div').hide();
	$('#game_initializer').show(2000);
}


function login_to_game() {
	if($('#p_username').val()=='') {
		alert('You have to set a username');
		return;
	}
	var pid = $('#p_id').val();
	//draw_empty_board(p_id);
	//fill_board();
	
	$.ajax({url: "moutzouris.php/players/"+pid, 
			method: 'PUT',
			dataType: "json",
			headers: {"X-Token": me.token},
			contentType: 'application/json',
			data: JSON.stringify( {p_username: $('#p_username').val(), p_id: pid}),
			success: login_result,
			error: login_error});
	//alert('username ok');
	//alert(data);
}

//ok και αυτή
function login_result(data) {
	//console.log("inside log ok");
	me = data[0];
	$('#game_initializer').hide();
	update_info();
	game_status_update();
	$('#moutzouris_start').show();
}

function login_error(data,_y,_z,_c) {
		var x = data.responseJSON;
		alert(x.errormesg);
		console.log("data login error function" + data);
}


//Δουλεύει
function game_status_update() {
	
	clearTimeout(timer);
	$.ajax({url: "moutzouris.php/status/", success: update_status,headers: {"X-Token": me.token} });
} 

 function update_status(data) {
	last_update=new Date().getTime();
	var game_stat_old = game_status;
	game_status=data[0];
	update_info();
	clearTimeout(timer);
	/* if(game_status.p_turn==me.p_id &&  me.p_id!=null) {
		x=0;
		// do play
		if(game_stat_old.p_turn!=game_status.p_turn) {
			fill_board();
		}
		$('#move_div').show(1000);
		timer=setTimeout(function() { game_status_update();}, 15000);
	} else {
		// must wait for something
		$('#move_div').hide(1000);
		timer=setTimeout(function() { game_status_update();}, 4000);
	} */
 	
}

function update_info(){
	$('#game_info').html("I am Player: "+me.p_id+", my name is "+me.p_username 
	+'<br>Token='+me.token+'<br>Game state: '+game_status.status+', '+ game_status.p_turn+' must play now.');
	
	
}

//τρέχει με την Έναρξη του παιχνιδιου - εμφανίζει άδεια deck και κουμπιά
function show_empty_decks(){
	$('#deck_div').show();
	$('#moutzouris_start').hide();
	$('#moutzouris_dealCards').show();
	
}

function dealCards() { //fill_board
	//dealing cards to db
	$.ajax({url: "moutzouris.php/dealCards", 
			method: 'GET',
			success: viewCards});
}

function viewCards(){ //σημαίνει να εμφανίσει ξανά τα decks
	//var d1; 
	$.ajax({url: "moutzouris.php/deck1/", 
	 success: function(data) {
		 d1 = JSON.stringify( {c_id: c_id, c_name: c_name, c_value: c_value, c_suit: c_suit, c_url: c_url});
		console.log("ινσιδε αζαξ" + d1);
    }  });

	//var d2;
	$.ajax({url: "moutzouris.php/deck2/", 
	 success: function(data) {
        d2 = data;
    }  });

	//console.log(d1);
	fill_decks();
}

function fill_decks(){ //trying to fill decks by player
	//alert("me p_id " + me.p_id);
	if (me.p_id == "p1" && me.p_id != null){
		var deck1= d1;
		var images = '';
		//alert("inside fill deck 1");
		for( var i = 0; i < deck1.length; ++i ) {
			images += '<img src="' + deck1[i]['c_url'] +'" />';
		}	
		document.getElementById('p1').innerHTML = images; 
		}

		var deck2= d2;
		var images = '';
		back_url = 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg';
		//alert("inside fill deck 1");
		for( var i = 0; i < deck2.length; ++i ) {
			images += '<img src="' + back_url +'" />';
		}	
		document.getElementById('p2').innerHTML = images; 
		 

}


/*function fill_deck2(data) { //fill_board_by_data
	//var deck1= JSON.parse(data);
	var deck2= data;
	var images = '';
	//alert("inside fill deck 2");
	for( var i = 0; i < deck2.length; ++i ) {
		images += '<img src="' + deck2[i]['c_url'] +'" />';
	}	
	document.getElementById('p2').innerHTML = images; 
}
function fill_deck1(data) { //fill_board_by_data
	//var deck1= JSON.parse(data);
	var deck1= data;
	var images = '';
	//alert("inside fill deck 1");
	for( var i = 0; i < deck1.length; ++i ) {
		images += '<img src="' + deck1[i]['c_url'] +'" />';
	}	
	document.getElementById('p1').innerHTML = images; 

	$('.play_buttons').show();
	$('#moutzouris_dealCards').hide();
	// 	for(var i=0;i<data.length;i++) {
	// 	var o = data[i];
	// 	var id = '#square_'+ o.x +'_' + o.y;
	// 	var c = (o.piece!=null)?o.piece_color + o.piece:'';
	// 	var pc= (o.piece!=null)?'piece'+o.piece_color:'';
	// 	var im = (o.piece!=null)?'<img class="piece '+pc+'" src="images/'+c+'.png">':'';
	// 	$(id).addClass(o.b_color+'_square').html(im);
	// }
 
	// $('.ui-droppable').droppable( "disable" );
		
	// if(me && me.piece_color!=null) {
	// 	$('.piece'+me.piece_color).draggable({start: start_dragging, stop: end_dragging, revert:true});
	// }
	// if(me.piece_color!=null && game_status.p_turn==me.piece_color) {
	// 	$('#move_div').show(1000);
	// } else {
	// 	$('#move_div').hide(1000);
	// } 
}*/


function delete1() { //delete double from deck1
	$.ajax({url: "moutzouris.php/delete1", 
			method: 'GET',
			success: viewCards});

		window.location;
		$("#delete1").addClass("hide");
		$("#delete2").removeClass("hide");
		$("#delete2").addClass("disabled");
		$("#pick1").addClass("hide");
		$("#pick2").removeClass("hide disabled");
}

function delete2() { //delete double from deck2
	$.ajax({url: "moutzouris.php/delete2", 
			method: 'GET',
			success: viewCards});

	window.location;
	$("#delete2").addClass("hide");
	$("#delete1").removeClass("hide");
	$("#delete1").addClass("disabled");
	$("#pick2").addClass("hide");
	$("#pick1").removeClass("hide disabled");

}

function pick1(){
	$.ajax({url: "moutzouris.php/pick1", 
			method: 'GET',
			success: viewCards});

	window.location;
	$("#delete1").removeClass("disabled");
	$("#pick1").addClass("disabled")		

}

function pick2(){
	$.ajax({url: "moutzouris.php/pick2", 
			method: 'GET',
			success: viewCards});

		window.location;
		$("#delete2").removeClass("disabled");
		$("#pick2").addClass("disabled")		

}

