<?php

class game_status
{
    //DB stuff
    private $conn;

    // Properties initialization
    public $status;
    public $p_turn;
    public $result;
    public $last_change;

    // Constructor with DB
    public function __construct($db)
    { //We pass a DB object
        $this->conn = $db;  //Add DB object to the connection
    }

    /**
     * @OA\Get(path="/ADISE21_MRS/api/status/handle_status.php", tags={"game_status"},
     * @OA\Response (response="200", description="Success"),
     *  @OA\Response (response="404", description="Not Found")
     * )
     */


    public function handle_status()
    {
        // Create query
        $query = 'SELECT * FROM game_status';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;
    }
}
