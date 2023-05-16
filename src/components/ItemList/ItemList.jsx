import { Item } from "../Item";

const ItemList = ({ listaProductos }) => {
  return (
    <div className="item-list">
      {listaProductos.map((producto) => {
        return (
          <Item
            key={producto.pictureurl}
            img={producto.pictureurl}
            stock={producto.stock}
            description={producto.description}
            price={producto.price}
            title={producto.title}
          />
        );
      })}
    </div>
  );
};

export default ItemList;