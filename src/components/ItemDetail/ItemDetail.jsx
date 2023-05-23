import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext} from "../Context/CartContext"
import { useParams } from "react-router-dom";


const ItemDetail = ({}) => {
  const { state } = useLocation();
  const { img, description, stock, price } = state;
  const { addProduct } = useContext(CartContext);
  

  const handlerCount = (count) => {
    addProduct(count);
  };


  return (
    <>
      <div>
        <h1>Detalle del Item</h1>
        <div>
          <img src={img} />
        </div>
        <div>
          <p>Descripcion: {description}</p>
        </div>
        <div>Precio: {price}</div>
        <div>{stock}</div>
        <ItemCount
          onChangeCount={(e) => handlerCount(e)}
          maxCount={stock}
      
        />
      </div>

    </>
  );
};

export default ItemDetail;