import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/Index";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import logo from '../../imagenes/logo.png'

const NavBar =() => {
    return (
        <div className="navbar">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/category/1"}>Productos</Link>
            <Link to={"/category/2"}>Preguntas frecuentes</Link>
            <Link to={"/category/3"}>Contacto</Link>
            <img src={logo} alt="Logo de la empresa" />
           <CartWidget /> 
        </div>
    );
};

export default NavBar;