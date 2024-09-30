
import React, { useContext, useReducer, useState } from "react";
import Button from "../Button/Button";
import ContexTheme from "../Context/ContexTheme";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import ProductReducer from "./ProductReducer";



const ProductsItem = ({data}) => {
    const themeContextValue = useContext(ContexTheme);
    const [added, setAdded] = useState();
    const [state, dispatch] = useReducer(ProductReducer, {added: true})

    const handleAdded = () => {
     if (state.added)   {
        dispatch({
            type: 'REMOVE_FROM_CART'
        })
     }else{
        dispatch({
            type: 'ADD_TO_CARD'
        })
     }
    }


    return(
        
        <div className="col-md-3">
        <div className="box mb-4">
        <img src={data.imgsrc} />
        <p className="product-title">{data.title}</p>
        <p className="product-title theme-color">{data.price}</p>
        <Button handleClick={handleAdded} btnStyle={{backgroundColor: themeContextValue.theme.color, border: themeContextValue.theme.color}} btnContent={state.added ? <div className="d-flex"><MdShoppingCart /><div>Add to Cart</div></div> : <div className="d-flex"><MdRemoveShoppingCart /><div>Remove from Cart</div></div>}/>
        </div>
        </div>
        
    )
}
export default ProductsItem;