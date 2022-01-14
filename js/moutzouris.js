var me={token:null,p_id:null};
var game_status={};
var board={};
var last_update=new Date().getTime();
var timer=null;


$(function () {
	//draw_empty_board();
	//fill_board();
	$('#deck_div').hide();
	$('#moutzouris_start').hide();
	$('#moutzouris_dealCards').hide();
	$('.play_buttons').hide();
	

	$('#moutzouris_restart').click(reset_board);
	$('#moutzouris_login').click( login_to_game);
	$('#moutzouris_reset').click( reset_board);
	$('#moutzouris_dealCards').click(dealCards);
	$('#moutzouris_start').click(show_empty_decks);
	//$('#moutzouris_start').click(showDecks);
	$('#delete1').click(delete1);
	$('#delete2').click(delete2);
	$('#pick1').click(get_a_card);
	$('#pick2').click(get_a_card2);
	//$('#do_move').click( do_move);
	//$('#move_div').hide();
	
	game_status_update();
	//$('#the_move_src').change( update_moves_selector);
	//$('#do_move2').click( do_move2);
});

// $('delete1').click(delete_duplicate_cards1);
//εμφανίζει-μοιράζει τις κάρτες στους παίκτες
const resetCards = async function(){

         const res1=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck1');
         const res2=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck2');   

		var json = await res1.json();
		console.log(json.length)
		var images = '';
		//alert(json.length/7);
		for( var i = 0; i < json.length; ++i ) {
			// console.log(JSON.stringify(json[i]));
			images += '<img src="' + json[i]['c_url'] +'" />';
		}	

		document.getElementById('p1').innerHTML = images; 

		var json = await res2.json();
		console.log(json.length);
		var images = '';
		//alert(json.length/7);
		for( var i = 0; i < json.length; ++i ) {
			images += '<img src="' + json[i]['c_url'] +'" />';
		}
		
		document.getElementById('p2').innerHTML = images; 
		
		if(!res1.ok) throw new Error(`${data1.message}`);
         if(!res2.ok) throw new Error(`${data2.message}`);  
    
};
const dealCards = async function(){
	
    try {
         await fetch('http://localhost/ADISE21_MRS/moutzouris.php/dealCards'); 
         const res1=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck1');
         const res2=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck2');   

		var json = await res1.json();
		var images = '';
		Winner(json);
		//alert(json.length/7);
		for( var i = 0; i < json.length; ++i ) {
			images += '<img src="' + json[i]['c_url'] +'" />';
		}	
		document.getElementById('p1').innerHTML = images; 

		var json = await res2.json();
		var images = '';
		//alert(json.length/7);
		for( var i = 0; i < json.length; ++i ) {
			images += '<img src="' + json[i]['c_url'] +'" />';
		}
		Winner2(json);
		document.getElementById('p2').innerHTML = images; 
		
		if(!res1.ok) throw new Error(`${data1.message}`);
         if(!res2.ok) throw new Error(`${data2.message}`);  
    }catch (err){
        alert(err)
    }
	$('.play_buttons').show();
	$('#moutzouris_dealCards').hide();
};

async function delete1() {
		await fetch('http://localhost/ADISE21_MRS/moutzouris.php/delete1');
		
		resetCards();
		window.location;
		$("#delete1").addClass("hide");
		$("#delete2").removeClass("hide");
		$("#delete2").addClass("disabled");
		$("#pick1").addClass("hide");
		$("#pick2").removeClass("hide disabled");
		

}
 function Winner(json) {
	if (json.length==0) {
			
		$("#moutzouris_restart").removeClass("hide");
		$("#pick1").addClass("hide");
		$("#pick2").addClass("hide");
		$("#delete1").addClass("hide");
		$("#delete2").addClass("hide");

		$("#status").text("Player 1 win")
	} 	
}
function Winner2(json) {
	if (json.length==0) {
			
		$("#moutzouris_restart").removeClass("hide");
		$("#pick1").addClass("hide");
		$("#pick2").addClass("hide");
		$("#delete1").addClass("hide");
		$("#delete2").addClass("hide");

		$("#status").text("Player 2 win")
	} 
}
async function delete2() {
	await fetch('http://localhost/ADISE21_MRS/moutzouris.php/delete2');
	
	resetCards();
	window.location;
	$("#delete2").addClass("hide");
	$("#delete1").removeClass("hide");
	$("#delete1").addClass("disabled");
	$("#pick2").addClass("hide");
	$("#pick1").removeClass("hide disabled");
	 
	
}
async function get_a_card() {
	//await fetch('http://localhost/ADISE21_MRS/moutzouris.php/get1');
	await fetch('http://localhost/ADISE21_MRS/moutzouris.php/pick1');
		resetCards();
		window.location;
		$("#delete1").removeClass("disabled");
		$("#pick1").addClass("disabled")
}
async function get_a_card2() {
	//await fetch('http://localhost/ADISE21_MRS/moutzouris.php/get2');
	await fetch('http://localhost/ADISE21_MRS/moutzouris.php/pick2');
		resetCards();
		window.location;
		$("#delete2").removeClass("disabled");
		$("#pick2").addClass("disabled")
}

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
	// var status="started"
	
	game_status=data[0];
	console.log("status " +game_status.status);
	//Λειτουργή
	//  if(game_status.status = status){
	// 	$('#moutzouris_dealCards').removeClass("disabled");
	//  }
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


//-----Read me----------


/* function dealCards() { //fill_board
	//dealing cards to db
	$.ajax({url: "moutzouris.php/dealCards", 
			method: 'GET',});

	$.ajax({url: "moutzouris.php/deck1/", 
	success: fill_deck1 });

	$.ajax({url: "moutzouris.php/deck2/", 
	success: fill_deck2 });
}

function fill_deck2(data) { //fill_board_by_data
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
} */