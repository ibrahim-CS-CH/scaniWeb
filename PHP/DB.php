<?php

class DB {
    public $con;
    public function __construct($database_type,$host, $database_name, $username, $password)
    {
        $db = "$database_type:host=$host;dbname=$database_name;";
        $this->con= new PDO($db, $username, $password);
    }
    public function getAll($table) {
        $query = "SELECT * FROM $table";
        $sql = $this->con->prepare($query);
        $sql->execute();
        $products = $sql->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
    }
    public function getOne($table, $sku) {
        try {
            $query = "SELECT * FROM $table WHERE sku = '$sku'";
            $sql = $this->con->prepare($query);
            $sql->execute();
             if($sql->fetchAll(PDO::FETCH_ASSOC)) {
                return true;
             }else {
                return false;
             }

        }
        catch (Exception $e) {
            echo $e;
        }

    }

    public function setProduct($table,$data) {
        $col= [];
        $val = [];
        $query = "INSERT INTO $table (";
        foreach ($data as $key => $value) {
            array_push($col, "`$key`");
            array_push($val, "'$value'");
        }
        $col = implode(',',$col);
        $val = implode(',',$val);
        $query .= "$col) VALUES ($val)";
        $sql = $this->con->prepare($query);
        if($sql->execute()) {
            return true;
        }
        
    }

    public function deleteProduct ($table, $sku) {
        $val =[];
        $query = "DELETE FROM $table WHERE sku IN(";
        foreach($sku as $value) {
            array_push($val, "'$value'");
        }
        $val = implode(',',$val);
        $query .="$val)";
        $sql = $this->con->prepare($query);
        if($sql->execute()) {
            $response = ['status' => 1, 'message' => 'deleted'];
            echo (json_encode($response));
        }
    }

}


