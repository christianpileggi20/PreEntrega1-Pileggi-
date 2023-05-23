import { Button } from "bootstrap";
import { useCount } from "./Hook/hook";

const ItemCount = ({ maxCount, onChangeCount, className }) => {
  const { count, decrement, increment } = useCount(1, 0, maxCount);

  const handlerClick = () => {
    increment();
    onChangeCount(count);
  };

  return (
    <div className={`item-count ${className}`}>
      <div className="item-count__container-button">
        <Button
          className="item-count__container-button__btn"
          variant="outline-dark"
          size="sm"
          onClick={handlerClick}>
          +
        </Button>
        <p className="item-count__container__text">{count}</p>
        <Button
          className="item-count__container-button__btn"
          variant="outline-dark"
          size="sm"
          onClick={decrement}>
          -
        </Button>
      </div>

      <div className="item-count__container-add-cart">
        <Button
          className="item-count__container-add-cart__btn"
          variant="outline-dark"
          size="sm">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;