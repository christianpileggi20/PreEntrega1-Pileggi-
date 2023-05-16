const ItemDetail = ({ img, description, stock, price }) => {
    return (
      <>
        <div>
          <h1>Detalle del Item</h1>
          <div>
            <img src={img} />
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>{price}</div> 
          <div>{stock}</div>
        </div>
        
      </>
    );
  };
  
  export default ItemDetail;