<?php
class cards_for_moutzouris
{
    //DB stuff
    private $conn;
    private $table = 'cards_for_moutzouris';

    // Properties initialization
    public $c_id;
    public $c_name;
    public $c_value;
    public $c_suit;

    // Constructor with DB
    public function __construct($db)
    { //We pass a DB object
        $this->conn = $db;  //Add DB object to the connection
    }

    // Get shuffled cards
    public function get_cards()
    {
        // Create query
        $query = 'SELECT * FROM cards_for_moutzouris ORDER BY rand()
        ';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;
    }

    // //Deal cards, splt deck, turn sql to array
    // public function deal_cards()
    // {
    //     // Create query
    //     $query = 'INSERT INTO deck1 (c_id, c_name1, c_value1)
    //     SELECT c_id, c_name, c_value
    //     FROM cards_for_moutzouris;
    //     SELECT * FROM deck1';

    //     // Prepare statement
    //     $stmt = $this->conn->prepare($query);

    //     // Execute query
    //     $stmt->execute();

    //     return $stmt;
    // }


    public function delete()
    {
        // Create query
        $query = 'DELETE FROM cards_for_moutzouris
        WHERE c_id NOT IN
        (SELECT max_id FROM (SELECT MAX(c_id) max_id FROM cards_for_moutzouris GROUP BY c_value) M)';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        if ($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    //Get single card
    public function read_single()
    {
        // Create query
        $query = 'SELECT * FROM cards_for_moutzouris 
                   WHERE
                        c_id = ?
                    LIMIT 0,1';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Bind ID
        $stmt->bindParam(1, $this->id);

        // Execute query
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC); //Fetch array

        // Set properties
        $this->c_id = $row['c_id'];
        $this->c_name = $row['c_name'];
        $this->c_value = $row['c_value'];
        $this->c_suit = $row['c_suit'];
        $this->c_url = $row['c_url'];
    }
}
