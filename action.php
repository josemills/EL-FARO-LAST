<?php


class Solicitud{
    public $nombre;
    public $email;
    public $fecha;
    public $telefono;

    function __construct($nombre, $email, $fecha, $telefono){
        $this->nombre = $nombre;
        $this->email = $email;
        $this->fecha = $fecha;
        $this->telefeno = $telefono;
    }

    function set_nombre($nombre){
        $this->nombre = $nombre;
    }

    function get_email(){
        return $this->nombre;
    }

    function get_fecha(){
        return $this->nombre;
    }

    function get_telefono(){
        return $this->nombre;
    }
}

$misolicitud = new Solicitud($_POST['nombre'], $_POST['email'], $_POST['fecha'], $_POST['telefono']);

echo $misolicitud->get_nombre();

?>
