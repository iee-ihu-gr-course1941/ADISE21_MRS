<?php
class Database
{
  //DB params
  private $host = 'localhost';
  private $db_name = 'adise21_mrs';
  private $username = 'root';
  private $password = '123456';
  private $conn;

  //DB Connect
  public function connect()
  {
    $this->conn = null;

    //PDO obj
    try {
      $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      echo 'Connection Error: ' . $e->getMessage();
    }

    return $this->conn;
  }
}
