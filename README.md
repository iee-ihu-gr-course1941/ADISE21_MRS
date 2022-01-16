# ADISE21_MRS

## Contributors
* Μαργαρίτα Νεκταρία Αλεξίου - Full Stack Development
* Στέφανος Καυκαλιάς - Front End Development
* Ποντικάκης Δημήτρης - Back End Development

![GitHub Contributors Image](https://contrib.rocks/image?repo=iee-ihu-gr-course1941/ADISE21_MRS)

### Demo Page to Play

Μπορείτε να κατεβάσετε τοπικά ή να επισκευτείτε την σελίδα: 
https://users.it.teithe.gr/~it164852/ADISE21_MRS/

## Απαιτήσεις

* Apache2
* Mysql Server
* php

## Οδηγίες Εγκατάστασης

 * Κάντε clone το project σε κάποιον φάκελο <br/>
  `$ git clone https://github.com/iee-ihu-gr-course1941/ADISE21_MRS.git`

 * Βεβαιωθείτε ότι ο φάκελος είναι προσβάσιμος από τον Apache Server. πιθανόν να χρειαστεί να καθορίσετε τις παρακάτω ρυθμίσεις.

 * Θα πρέπει να δημιουργήσετε στην Mysql την βάση με όνομα 'adise21_mrs' και να φορτώσετε σε αυτήν την βάση τα δεδομένα από το αρχείο schema.sql

 * Θα πρέπει να φτιάξετε το αρχείο lib/config_local.php το οποίο να περιέχει:
```
    <?php
	$DB_PASS = 'κωδικός';
	$DB_USER = 'όνομα χρήστη';
    ?>
```

## Περιγραφή παιχνιδιού

### Στόχος :
     Ο στόχος του παιχνιδιού είναι να μείνεις χωρίς φύλλα στο χέρι. Αυτός που θα μείνει με ένα φύλλο είναι ο χαμένος.

### Προετοιμασία :
     Πριν ξεκινήσετε αφαιρείτε από την τράπουλα όλες τις φιγούρες  και κρατάτε μόνο τον Ρήγα Μπαστούνι.
     
### Διαδικασία παιχνιδιού :
     Αφού ανακατέψουμε καλά, μοιράζουμε όλη την τράπουλα στους παίχτες έτσι ώστε όλοι να έχουν των ίδιο αριθμό φύλλων (ή + - 1). Κάθε παίχτης αφαιρεί από τα φύλλα που έχει στα χέρια του τα ζευγάρια, δηλαδή, 2 Άσσους 2 δυάρια 2 τριάρια κ.τ.λ. Τα υπόλοιπα τα κρατάμε στο χέρι σαν βεντάλια έτσι ώστε να μπορεί ο άλλος παίχτης να διαλέξει, χωρίς να τα βλέπει, ένα από αυτά. Ο πρώτος παίχτης τραβάει ένα φύλλο από αυτόν που κάθετε στα αριστερά του, αν κάνει ζευγάρι το νέο χαρτί με κάποια από τα δικά του τότε τα ρίχνει, αλλιώς τα κρατάει και συνεχίζει ο επομένως που είναι στα δεξιά του. Όποιος ζευγαρώσει όλα τα φύλλα του βγαίνει από το παιχνίδι. Όποιος μείνει τελευταίος με τον Ρήγα Μπαστούνι (τον Μουτζούρη) στο χέρι του είναι ο χαμένος, και οι υπόλοιποι παίχτες αποφασίζουν την ποινή του.
     
### Στοιχεία :
   Παίχτες : Από 2 έως 6
   Χαρτιά : 41 (Μία τράπουλα)

## Database

### Cards
A table that contains a standard 52-card deck.
| Field | Description |
| --- | --- |
|`c_id`|Unique ID for every card|
|`c_name`| Card's name|
|`c_value`| Card's value|
|`c_suit`|Card's suit |
|`c_image`|Card's image |

### Cards_for_moutzouris
A table that contains the 41 cards needed to play old maid.
| Field | Description |
| --- | --- |
|`c_id`|Unique ID for every card|
|`c_name`| Card's name|
|`c_value`| Card's value|
|`c_suit`|Card's suit |
|`c_image`|Card's image |

### Cards_for_moutzouris_reset
A table that helps reset the initial deck of cards for old maid.
| Field | Description |
| --- | --- |
|`c_id`|Unique ID for every card|
|`c_name`| Card's name|
|`c_value`| Card's value|
|`c_suit`|Card's suit |
|`c_image`|Card's image |

### Deck1 - Deck2
Two empty tables in which we split shuffled cards from Cards_for_moutzouris.
| Field | Description |
| --- | --- |
|`c_id`|Unique ID for every card|
|`c_name`| Card's name|
|`c_value`| Card's value|
|`c_suit`|Card's suit |
|`c_image`|Card's image |

### Game_status
A table that contains the status of the game.
| Field | Description |
| --- | --- |
|`status`| 'not active','initialized','started','ended','aborded'|
|`p_turn`| Id of the player that plays |
|`result`| Id of the player that won|
|`last_change`|A timestamp of the last change/action in the game |

### Players
A table that contains player's info.
| Field | Description |
| --- | --- |
|`p_username`|Player's urename|
|`p_id`| Player's Id |
|`token`| Player's secret token |
|`p_last_action`|A timestamp of the last action by the player |

## Περιγραφή API

### **Methods**
| Method | request type | parameters | Description |
| --- | --- | --- | --- |
|`moutzouris.php/dealCards` | GET | - | Deals cards on players |
|`moutzouris.php/board` | GET | - | Gets a shuffled deck with cards for moutzouris |
|`moutzouris.php/reset` | GET | - | Resets game status, players and decks |
|`moutzouris.php/deleteDecks` | GET | - | Resets decks (*reset* includes this one too) |
|`moutzouris.php/deck1` | GET | - | Gets cards from deck 1 (Player 1) |
|`moutzouris.php/deck2` | GET | - | Gets cards from deck 2 (Player 2) |
|`moutzouris.php/delete1` | DELETE | - | Deletes double cards (cards with same value and name) from deck1 (Player 1) |
|`moutzouris.php/delete2` | DELETE | - | Deletes double cards (cards with same value and name) from deck2 (Player 2) |
|`moutzouris.php/pick1` | POST | - | Inserts a random card from deck2 to deck1 and then deletes that card from deck2 |
|`moutzouris.php/pick2` | POST  | - |Inserts a random card from deck1 to deck2 and then deletes that card from deck1 |
|`amoutzouris.php/` | GET | body: Id of card | Gets a single card from deck |
|`moutzouris.php/status` | GET | - | Gets game status |
|`moutzouris.php/players` | GET | - | Gets players |
|`moutzouris.php/players/p1` | GET | - | Gets player 1 |
|`moutzouris.php/players/p2` | GET | - | Gets player 2 |


