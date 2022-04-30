<?php

    class ConnectionServer{
        private $host = "localhost";
        private $database = "medtech";
        private $user = "root";
        private $password = "";
        private $connection;
        public function getConnection(){
            $this->connection = null;
            try{
                $this->connection = mysqli_connect($this->host, $this->user, $this->password, $this->database);
            } catch (Exception $th) {
                //echo "Conexion fallida: " . $th->getMessage();
                //console.log("Conexion fallida: " . $th->getMessage());
            }
            return $this->connection;
        }
        public function closeConnection() {
            mysqli_close($this->connection);
        }
    }
?>