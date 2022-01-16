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
   > Αφού ανακατέψουμε καλά, μοιράζουμε όλη την τράπουλα στους παίχτες έτσι ώστε όλοι να έχουν των ίδιο αριθμό φύλλων (ή + - 1). Κάθε παίχτης αφαιρεί από τα φύλλα που έχει στα χέρια του τα ζευγάρια, δηλαδή, 2 Άσσους 2 δυάρια 2 τριάρια κ.τ.λ. Τα υπόλοιπα τα κρατάμε στο χέρι σαν βεντάλια έτσι ώστε να μπορεί ο άλλος παίχτης να διαλέξει, χωρίς να τα βλέπει, ένα από αυτά. Ο πρώτος παίχτης τραβάει ένα φύλλο από αυτόν που κάθετε στα αριστερά του, αν κάνει ζευγάρι το νέο χαρτί με κάποια από τα δικά του τότε τα ρίχνει, αλλιώς τα κρατάει και συνεχίζει ο επομένως που είναι στα δεξιά του. Όποιος ζευγαρώσει όλα τα φύλλα του βγαίνει από το παιχνίδι. Όποιος μείνει τελευταίος με τον Ρήγα Μπαστούνι (τον Μουτζούρη) στο χέρι του είναι ο χαμένος, και οι υπόλοιποι παίχτες αποφασίζουν την ποινή του.
     
### Στοιχεία :
   Παίχτες : Από 2 έως 6
   
   Χαρτιά : 41 (Μία τράπουλα)

## Database

### Cards
Ένας πίνακας που περιέχει μια τράπουλα 52 καρτών.
| Field | Description |
| --- | --- |
|`c_id`|Μοναδικό ID για κάθε κάρτα|
|`c_name`| Όνομα κάρτας |
|`c_value`| Αριθμός κάρτας |
|`c_suit`|Σύμβολο κάρτας |
|`c_image`|Εικόνα κάρτας |

### Cards_for_moutzouris
Ένας πίνακας που περιέχει τθς 41 κάρτες που χρειάζονται για το παιχνίδι μουτζούρης.
| Field | Description |
| --- | --- |
|`c_id`|Μοναδικό ID για κάθε κάρτα|
|`c_name`| Όνομα κάρτας|
|`c_value`| Αριθμός κάρτας|
|`c_suit`|Σύμβολο κάρτας |
|`c_image`|Εικόνα κάρτας |

### Cards_for_moutzouris_reset
Ένας βοηθητικός πίνακας που επανεκκινεί τον αρχικό πίνακα (Cards_for_moutzouris) του παιχνιδιού.
| Field | Description |
| --- | --- |
|`c_id`|Μοναδικό ID για κάθε κάρτα|
|`c_name`| Όνομα κάρτας|
|`c_value`| Αριθμός κάρτας|
|`c_suit`|Σύμβολο κάρτας |
|`c_image`|Εικόνα κάρτας |

### Deck1 - Deck2
Δυο άδειοι πίνακες που αντιστοιχούν στην τράπουλα του κάθε παίκτη και γεμίζουν με τυχαίες κάρτες όταν ξεκινάει το παιχνίδι.
| Field | Description |
| --- | --- |
|`c_id`|Μοναδικό ID για κάθε κάρτα|
|`c_name`| Όνομα κάρτας|
|`c_value`| Αριθμός κάρτας|
|`c_suit`|Σύμβολο κάρτας |
|`c_image`|Εικόνα κάρτας |

### Game_status
Πίνακας που περιέχει στοιχεία για την κατάσταση του παιχνιδιού.
| Field | Description |
| --- | --- |
|`status`| 'not active','initialized','started','ended','aborded'|
|`p_turn`| Το id του παίκτη που είναι η σειρά του να παίξει |
|`result`| Το id του παίκτη που κέρδισε το παιχνίδι|
|`last_change`|Τελευταία αλλαγή/ενέργεια στην κατάσταση του παιχνιδιού |

### Players
Πίνακας που περιέχει στοιχεία του κάθε παίκτη.
| Field | Description |
| --- | --- |
|`p_username`|Όνομα χρήστη|
|`p_id`| Id του παίκτη |
|`token`| To κρυφό token του παίκτη. Επιστρέφεται μόνο τη στιγμή της εισόδου του παίκτη στο παιχνίδι	 |
|`p_last_action`|Τελευταία αλλαγή/ενέργεια στην κατάσταση του παίκτη |

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
|`moutzouris.php/pick1` | GET | - | Inserts a random card from deck2 to deck1 and then deletes that card from deck2 |
|`moutzouris.php/pick2` | GET  | - |Inserts a random card from deck1 to deck2 and then deletes that card from deck1 |
|`amoutzouris.php/` | GET | body: Id of card | Gets a single card from deck |
|`moutzouris.php/status` | GET | - | Gets game status |
|`moutzouris.php/players` | GET | - | Gets players |
|`moutzouris.php/players/p1` | GET | - | Gets player 1 |
|`moutzouris.php/players/p2` | GET | - | Gets player 2 |


