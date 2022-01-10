# ADISE21_MRS

# Demo Page to Play

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
## Περιγραφή API

### **Methods**
| Method | request type | parameters | Description |
| --- | --- | --- | --- |
|`moutzouris.php/dealCards` | GET | - | Deals cards on players |
|`moutzouris.php/board` | GET | - | Gets a shuffled deck with cards for moutzouris |
|`moutzouris.php/reset` | GET | - | Resets game status, players and decks |
|`moutzouris.php/deleteDecks` | GET | - | Resets decks (reset includes this one too) |
|`moutzouris.php/deck1` | GET | Gets cards from deck 1 (Player 1) |
|`moutzouris.php/deck2` | GET | Gets cards from deck 2 (Player 2) |
|`amoutzouris.php/` | GET | body: Id of card | Gets a single card from deck |
|`moutzouris.php/status` | GET | - | Gets game status |
|`moutzouris.php/players` | GET | - | Gets players |
|`moutzouris.php/players/p1` | GET | - | Gets player 1 |
|`moutzouris.php/players/p2` | GET | - | Gets player 2 |


