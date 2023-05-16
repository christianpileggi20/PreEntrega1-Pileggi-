import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Item";


const arrayProductos = () => [
    { id: 1,
      title: "Jamon cocido",
      description: "San Jose",
      stock: 5, 
      price: 1000,
      pictureUrl: "https://alimentossanjose.com.ar/wp-content/uploads/2021/12/Natural-reducido-en-sodio.png"},
  
    { id: 2,
      title: "Salame",
      description: "Tipo Milan",
      stock: 5,
      price: 1500,
      pictureUrl: "https://ladistribuidoraonline.com/assets/img/imgProd/418-kaYtug26mN-1.png"},
    { id: 3,
      title: "Jamon cocido natural",
      description: "Bocatti",
      stock: 5,
      price: 4000,
      pictureUrl: "https://01d79fd0c8.cbaul-cdnwnd.com/28eb76791ce9fe0d1fa1cec667cac35b/200000015-9b6849b687/jamon-cocido-bocatti.jpg?ph=01d79fd0c8" },
    { id: 4,
      title: "Queso cremoso",
      description: "Punta del agua",
      stock: 5,
      price: 3000,
      pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/15f05ea900edf5d10aafad2e49f0070534328afe451eacd1d73307b80d95df0568416.jpeg"}
]; 
  
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const { ItemId } = useParams()

    useEffect ((arrayProductos) => {
        arrayProductos (ItemId)
            .then(arrayProductos => {
                setProducto(arrayProductos.find((ItemId) => Item.id === 2))
    

            .catch(error => {
                console.error(error)
            })
    },   [ItemId]);

    


    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...producto} />
        </div>
    );
});
};  

export default ItemDetailContainer;