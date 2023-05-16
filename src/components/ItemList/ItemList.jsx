import Item from "../Item/Item";


const ItemList = ({ listaProductos }) => {
  return (
    <div>
      {listaProductos.map((producto) => {
        return (
          <Item
            
            key={producto.pictureurl}
            img={producto.pictureurl}
            stock={producto.stock}
            description={producto.description}
            price={producto.price}
            id={producto.id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;