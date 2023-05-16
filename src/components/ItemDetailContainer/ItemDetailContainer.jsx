import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import arrayProductos from "../ItemListContainer/ItemListContainer"

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
    },   []);


    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...producto} />
        </div>
    );
};  

export default ItemDetailContainer;