import { CartContext } from "../Context/CartContext";
import { useContext } from "react";



const Cartwidget = () => {
    const { AddProductCart } = useContext(CartContext);
  
    console.log(AddProductCart);
    return (
      <div>
        <img src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-jaune.png" className="iconoCarrito" alt="Icono carrito" />
        <p>{AddProductCart}</p>
      </div>
    );
  };
  export default Cartwidget;



