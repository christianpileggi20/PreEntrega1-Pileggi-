const Item = ({ producto }) => {
    const { id, img, name, description, price, stock} = producto;
  
    return (
      <div style={{ width: '20rem', margin: '.5rem' }}>
        <img src={img} alt={name} />
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>${price}</p>
          <p>stock: {stock}</p>
          <p>{id}</p>
          
        
        </div>
  
        <button>Ver más</button>
      </div>
    );
  };

  export default Item;