//var values = new Array();
var deck1 = new Array();
var deck2 = new Array();
//console.log("test");
const showRecipe = async function(){
    try {
         await fetch('http://localhost/ADISE21_MRS/moutzouris.php/dealCards'); 
         const res2=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck1');
         const res3=await fetch('http://localhost/ADISE21_MRS/moutzouris.php/deck2');   
         const data1 = await res2.json();
         const data2 =await res3.json();
         
         var value;
         var card1;
         var card2;
         
         
         
         Object.keys(data1).forEach(function(k){
            
            
             switch(data1[k].c_id){
                case 19:
                  value = "6";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 14:
                 value = "1";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;             
                case 42:
                 value = "3";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 47:
                 value = "8";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 22:
                 value = "9";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 1:
                 value = "1";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 48:
                 value = "9";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 30:
                 value = "4";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 16:
                 value = "3";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 17:
                 value = "4";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 3:
                 value = "3";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 35:
                 value = "9";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 15:
                 value = "2";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 18:
                 value = "5";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 32:
                 value = "6";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 44:
                 value = "5";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;                    
                case 34:
                 value = "8";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 43:
                 value = "4";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 20:
                 value = "7";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 46:
                 value = "7";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 45:
                 value = "6";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 10:
                 value = "10";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 41:
                 value = "2";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                case 9:
                 value = "9";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                 case 28:
                 value = "2";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 49:
                 value = "10";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;  
                 case 29:
                 value = "3";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 21:
                 value = "8";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 6:
                 value = "6";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                 case 4:
                 value = "4";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 36:
                 value = "10";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 52:
                 value = "K";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 5:
                 value = "5";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 23:
                 value = "10";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;                  
                 case 31:
                 value = "5";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 27:
                 value = "1";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                 case 2:
                 value = "2";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;  
                 case 33:
                 value = "7";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break; 
                 case 8:
                 value = "8";
                 card1={Value: value , Suit: data1[k].c_suit};
                 break;
                 
                 
                 
            }   
            deck1.push(card1);
            
           
        });
        Object.keys(data2).forEach(function(k){
            
            switch(data2[k].c_id){
               case 19:
               
                 value = "6";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 14:
                value = "1";
                card2={Value: value , Suit: data2[k].c_suit};
                break;             
               case 42:
                value = "3";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 47:
                value = "8";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 22:
                value = "9";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 1:
                value = "1";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 48:
                value = "9";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 30:
                value = "4";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 16:
                value = "3";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 17:
                value = "4";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 3:
                value = "3";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 35:
                value = "9";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 15:
                value = "2";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 18:
                value = "5";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 32:
                value = "6";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 44:
                value = "5";
                card2={Value: value , Suit: data2[k].c_suit};
                break;                    
               case 34:
                value = "8";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 43:
                value = "4";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 20:
                value = "7";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 46:
                value = "7";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 45:
                value = "6";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 10:
                value = "10";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 41:
                value = "2";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
               case 9:
                value = "9";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
                case 28:
                value = "2";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 49:
                value = "10";
                card2={Value: value , Suit: data2[k].c_suit};
                break;  
                case 29:
                value = "3";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 21:
                value = "8";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 6:
                value = "6";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
                case 4:
                value = "4";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 36:
                value = "10";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 52:
                value = "K";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 5:
                value = "5";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 23:
                value = "10";
                card2={Value: value , Suit: data2[k].c_suit};
                break;                  
                case 31:
                value = "5";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 27:
                value = "1";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
                case 2:
                value = "2";
                card2={Value: value , Suit: data2[k].c_suit};
                break;  
                case 33:
                value = "7";
                card2={Value: value , Suit: data2[k].c_suit};
                break; 
                case 8:
                value = "8";
                card2={Value: value , Suit: data2[k].c_suit};
                break;
                
                
                
           }    
        deck2.push(card2);
        
    });

         if(!res2.ok) throw new Error(`${data2.message}`);
         if(!res3.ok) throw new Error(`${data1.message}`);  
    }catch (err){
        alert(err)
    }
};
        
    
        var players = new Array();
        var currentPlayer = 0;
        
        
      
        const reset = async function(){
            
                
                await fetch('http://localhost/ADISE21_MRS/moutzouris.php/reset');
                
            
        }
        
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

      

        function start()
        {
            document.getElementById('btnStart').classList.add('hide');
            document.getElementById('btnRestart').classList.remove('hide');

            document.getElementById("status").style.display="none";
           
            currentPlayer = 0;
            showRecipe();
            
            createPlayers(2);
            createPlayersUI();
            dealHands();
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }

        function restart() {
            reset();
            
            window.location.reload();
        }
        function dealHands()
        {
            // alternate handing cards to each player
           

            for(var i = 0; i < deck1.length ; i++)
            {
            
                    var card = deck1.pop();
                    players[0].Hand.push(card);
                    renderCard(card, 0);
        
            }
            for(var i = 0; i < deck2.length ; i++)
            {
            
                    var card = deck2.pop();
                    players[1].Hand.push(card);
                    renderCard(card, 1);
        
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


        // function hitMe()
        // {
        //     // pop a card from the enemy to the current player
        //     //TODO  
        //     var card = deck.pop();
        //     players[currentPlayer].Hand.push(card);
        //     renderCard(card, currentPlayer);
           
        //     // check();
        // }

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