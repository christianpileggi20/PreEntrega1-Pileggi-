import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/Index";
import logo from '../../imagenes/logo.png'
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const NavBar =() => {
    return (
        <div className="navbar">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/category/productos"}>Productos</Link>
            <Link to={"/category/preguntasfrecuentes"}>Preguntas frecuentes</Link>
            <Link to={"/category/contacto"}>Contacto</Link>
            <img src={logo} alt="Logo de la empresa" />
           <CartWidget /> 
        </div>
    );
};

export default NavBar;