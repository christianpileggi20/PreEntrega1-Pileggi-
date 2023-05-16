import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";



  
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const { ItemId } = useParams()

    useEffect (() => {
        arrayProductos (ItemId)
            .then(response => {
                setProducto(response)
            })

            .catch(error => {
                console.error(error)
            })
    },   [ItemId]);

    


    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...producto} />
        </div>
    );
};  

export default ItemDetailContainer;