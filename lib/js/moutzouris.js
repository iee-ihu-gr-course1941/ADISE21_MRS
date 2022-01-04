
        var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var deck = new Array();
        var Moutzouris = "K";
        var players = new Array();
        var currentPlayer = 0;
        
        const showRecipe = async function(){
            try {
                 const res=await fetch('URL')   
                 const data = await res.json();
                 if(!res.ok) throw new Error(`${data.message}`);
            }catch (err){
                alert(err)
            }
        };
        showRecipe();
       

        function createDeck()
        {
            deck = new Array();
            for (var i = 0 ; i < values.length; i++)
            {
                for(var x = 0; x < suits.length; x++)
                {
                    
                   
                    var card = { Value: values[i], Suit: suits[x]};
                    deck.push(card);
                }
                var moutzouris = parseInt(Moutzouris.value);
                deck.push(moutzouris);
            }
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

        function shuffle()
        {
            // for 1000 turns
            
            for (var i = 0; i < 1000; i++)
            {
                var location1 = Math.floor((Math.random() * deck.length));
                var location2 = Math.floor((Math.random() * deck.length));
                var tmp = deck[location1];

                deck[location1] = deck[location2];
                deck[location2] = tmp;
            }
        }

        function start()
        {
            document.getElementById('btnStart').value = 'Restart';
            document.getElementById("status").style.display="none";
           
            currentPlayer = 0;
            createDeck();
            shuffle();
            createPlayers(2);
            createPlayersUI();
            dealHands();
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }

        function dealHands()
        {
            // alternate handing cards to each player
            
            for(var i = 0; i < deck.length; i++)
            {
                for (var x = 0; x < players.length; x++)
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
            if (card.Suit == 'Hearts')
            icon='&hearts;';
            else if (card.Suit == 'Spades')
            icon = '&spades;';
            else if (card.Suit == 'Diamonds')
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
            createDeck();
            shuffle();
            createPlayers(1);
        });