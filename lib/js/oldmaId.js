        var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var OLDMAID = "K";
        var deck = new Array();
        var Users = new Array(2);
        var currentUser = 0;

        
        function createDeck() {
                deck = new Array
                for(var x = 0; x < suits.length; x++)
                {
                        for (var i = 0 ; i < values.length; i++)
                        {
                                var deck = [];

                                for(i=0; i < suits.length; i++) {
                                        for(j=0; j < FACES.length; j++) {
                                                deck.push({suit: suits[i], Value: values[j]});
                                        }
                                }
                                deck.push({suit: OLDMAID});
                        
                                return deck;
                        }
                    }       
        }
        function shuffle(){
                var dealto = 0;
		var cardIndex;
		var card; 
                while(this.deck.length){
                        if(dealto == this.players.length){
                                dealto == 0;
                        }
                        cardIndex = Math.floor(Math.random()*this.deck.length);
                        this.players[dealto].hand.push(this.deck[cardIndex]);
                        this.deck.splice(cardIndex,1);

                        dealto++;
                }       
        }