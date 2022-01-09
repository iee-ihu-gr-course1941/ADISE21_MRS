//var values = new Array();
var deck = new Array();
const showRecipe = async function(){
    try {
         const res=await fetch('http://localhost/ADISE21_MRS/lib/apir/get_cards.php'); 

         const data = await res.json();
         var value;
         var card;
         
         
         console.log("Data " +data.length)
         Object.keys(data).forEach(function(k){
            
             console.log(data[k].c_id)
             switch(data[k].c_id){
                case 19:
                
                  value = "6";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 14:
                 value = "1";
                 card={Value: value , Suit: data[k].c_suit};
                 break;             
                case 42:
                 value = "3";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 47:
                 value = "8";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 22:
                 value = "9";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 1:
                 value = "1";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 48:
                 value = "9";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 30:
                 value = "4";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 16:
                 value = "3";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 17:
                 value = "4";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 3:
                 value = "3";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 35:
                 value = "9";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 15:
                 value = "2";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 18:
                 value = "5";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 32:
                 value = "6";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 44:
                 value = "5";
                 card={Value: value , Suit: data[k].c_suit};
                 break;                    
                case 34:
                 value = "8";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 43:
                 value = "4";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 20:
                 value = "7";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 46:
                 value = "7";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 45:
                 value = "6";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 10:
                 value = "10";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 41:
                 value = "2";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                case 9:
                 value = "9";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                 case 28:
                 value = "2";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 49:
                 value = "10";
                 card={Value: value , Suit: data[k].c_suit};
                 break;  
                 case 29:
                 value = "3";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 21:
                 value = "8";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 6:
                 value = "6";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                 case 4:
                 value = "4";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 36:
                 value = "10";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 52:
                 value = "K";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 5:
                 value = "5";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 23:
                 value = "10";
                 card={Value: value , Suit: data[k].c_suit};
                 break;                  
                 case 31:
                 value = "5";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 27:
                 value = "1";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                 case 2:
                 value = "2";
                 card={Value: value , Suit: data[k].c_suit};
                 break;  
                 case 33:
                 value = "7";
                 card={Value: value , Suit: data[k].c_suit};
                 break; 
                 case 8:
                 value = "8";
                 card={Value: value , Suit: data[k].c_suit};
                 break;
                 
                 
                 
            }   
            deck.push(card); 
           
        });
        
        console.log("LENGHT "+deck.length);
       console.log("DECK " +JSON.stringify(deck));

         //console.log( res , data );
         
        //  response= [{
        //      id=response.c_id,
        //      name= response.c_name,
        //      value=response.c_value,
        //      suit=response.c_suit,
        //     image=response.c_url
        //  }]
        // console.log(JSON.stringify(response));
        //console.log(JSON.stringify(data) + "Res "+ JSON.stringify(res));
         if(!res.ok) throw new Error(`${data.message}`);
         
    }catch (err){
        alert(err)
    }
};
        
    
        var players = new Array();
        var currentPlayer = 0;
        
        
        
       

        
        function createPlayers(num)
        {
            players = new Array();
            for(var i = 1; i <= num; i++)
            {
                var hand = new Array();
                var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
                players.push(player);
            }
        }

        function createPlayersUI()
        {
            document.getElementById('players').innerHTML = '';
            for(var i = 0; i < players.length; i++)
            {
                var div_player = document.createElement('div');
                var div_playerid = document.createElement('div');
                var div_hand = document.createElement('div');
                
                div_player.id = 'player_' + i;
                div_player.className = 'player';
                div_hand.id = 'hand_' + i;
                div_playerid.innerHTML = 'Player ' + players[i].ID;
                div_player.appendChild(div_playerid);
                div_player.appendChild(div_hand);
                
                document.getElementById('players').appendChild(div_player);
            }
        }

        // function shuffle()
        // {
        //     // for 1000 turns
            
        //     for (var i = 0; i < 1000; i++)
        //     {
        //         var location1 = Math.floor((Math.random() * deck.length));
        //         var location2 = Math.floor((Math.random() * deck.length));
        //         var tmp = deck[location1];

        //         deck[location1] = deck[location2];
        //         deck[location2] = tmp;
        //     }
        // }

        function start()
        {
            document.getElementById('btnStart').value = 'Restart';
            document.getElementById("status").style.display="none";
           
            currentPlayer = 0;
            showRecipe();
            // shuffle();
            createPlayers(2);
            createPlayersUI();
            dealHands();
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }

        function dealHands()
        {
            // alternate handing cards to each player
            console.log("DECK "+deck.length);
            console.log("players.length "+players.length);

            
            
                for (var x = 0; x < players.length; x++)
                {
                    for(var i = 0; i < 21 ; i++)
                    {
                    var card = deck.pop();
                    players[x].Hand.push(card);
                    renderCard(card, x);
                    
                    }
                }

        }

        function renderCard(card, player)
        {
            var hand = document.getElementById('hand_' + player);
            hand.appendChild(getCardUI(card));
        }

        function getCardUI(card)
        {
            var el = document.createElement('div');
            var icon = '';
            if (card.Suit == "hearts")
            icon='&hearts;';
            else if (card.Suit == "spades")
            icon = '&spades;';
            else if (card.Suit == "diamonds")
            icon = '&diams;';
            else
            icon = '&clubs;';
            
            el.className = 'card';
            el.innerHTML = card.Value + '<br/>' + icon;
            return el;
        }


        function hitMe()
        {
            // pop a card from the enemy to the current player
            //TODO  
            var card = deck.pop();
            players[currentPlayer].Hand.push(card);
            renderCard(card, currentPlayer);
           
            // check();
        }

        function remove()
        {
            //TODO move on to next player, after remove the duplicate cards
            if (currentPlayer != players.length-1) {
                document.getElementById('player_' + currentPlayer).classList.remove('active');
                currentPlayer += 1;
                document.getElementById('player_' + currentPlayer).classList.add('active');
            }

            // else {
            // TODO    end();
            // }
        }

        // function end()
        // {
        //     var winner = -1;
        //     var score = 0;

        //     for(var i = 0; i < players.length; i++)
        //     {
        //        TODO if (..)
        //         {
        //             winner = i;
        //         }

        //         score = players[i].Points;
        //     }

        //     document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
        //     document.getElementById("status").style.display = "inline-block";
        // }

        // function check()
        // {
        // TODO
        //     if (...)
        //     {
        //         document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        //         document.getElementById('status').style.display = "inline-block";
        //         // end();
        //     }
        // }

        

        window.addEventListener('load', function(){
            showRecipe();
            
            // shuffle();
            createPlayers(2);
        });