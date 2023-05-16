import { Link } from "react-router-dom";

const Item = ({ id, img, name, description, stock, price }) => {
    
  
    return (
      <div>
        <img src={img} />
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>${price}</p>
          <p>stock: {stock}</p>
          <p>{id}</p>
          
          
        
        </div>
  
        <Link to={`/item/${id}`}>Ver detalles </Link>
      </div>
    );
  };

  export default Item;