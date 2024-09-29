
import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import ContexTheme from "../Context/ContexTheme";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";


const ProductsItem = ({data}) => {
    const themeContextValue = useContext(ContexTheme);
    const [added, setAdded] = useState(true);

    const handleAdded = () => {
        setAdded(!added);
        console.log(added);
    }


    return(
        
        <div className="col-md-3">
        <div className="box mb-4">
        <img src={data.imgsrc} />
        <p className="product-title">{data.title}</p>
        <p className="product-title theme-color">{data.price}</p>
        <Button  handleClick={handleAdded} btnStyle={{backgroundColor: themeContextValue.theme.color, border: themeContextValue.theme.color}} btnContent={added ? <div className="d-flex"><MdShoppingCart /><div>Add to Cart</div></div> : <div className="d-flex"><MdRemoveShoppingCart /><div>Remove from Cart</div></div>}/>
        </div>
        </div>
        
    )
}
export default ProductsItem;