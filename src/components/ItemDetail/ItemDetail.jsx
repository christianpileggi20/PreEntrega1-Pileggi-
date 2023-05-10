const ItemDetail = (props) => {
    const {imgurl, name, descripcion} = props;

    return (
        <>
        <div>
        <img src={imgurl} width={100} height={100} />
        </div>
        <div>
        <p>{name}</p>
        <p>{descripcion}</p>            
        </div>

    </>
    )
     
};



export default ItemDetail;