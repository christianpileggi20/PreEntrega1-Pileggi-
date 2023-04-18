import CartWidget from "../CartWidget/Index";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import logo from '../../imagenes/logo.png'
const NavBar =() => {
    return (
        <div className="navbar">
            <a href="#" className="nav_items"><li>Inicio</li></a>
            <a href="#" className="nav_items"><li>Picadas</li></a>
            <a href="#" className="nav_items"><li>Preguntas frecuentes</li></a>
            <a href="#" className="nav_items"><li>Contacto</li></a>
            <img src={logo} alt="Logo de la empresa" />
           <CartWidget /> 
        </div>
    );
};

export default NavBar;