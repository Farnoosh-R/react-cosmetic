
import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import Button from "../Button/Button";
import ContexTheme from "../Context/ContexTheme";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import ProductReducer from "./ProductReducer";
import './style.css'


const ProductsItem = ({data}) => {
    const themeContextValue = useContext(ContexTheme);
    const [added, setAdded] = useState();
    const [state, dispatch] = useReducer(ProductReducer, {added: true})
    const productItemRef = useRef(null);

    console.log("product",data)


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

useEffect(() => {
    console.log(productItemRef)
    productItemRef.current.classList.add('visible');
}, [])

    return(
        
        <div className="col-md-3 ProductsItem" ref={productItemRef} key={data.id}>
        <div className="box mb-4">
        <img src={data.ads} />
        <p className="product-title">{data.title}</p>
        <p className="product-title theme-color">{data.price}</p>
        <Button handleClick={handleAdded} btnStyle={{backgroundColor: themeContextValue.theme.color, border: themeContextValue.theme.color}} btnContent={state.added ? <div className="d-flex"><MdShoppingCart /><div>Add to Cart</div></div> : <div className="d-flex"><MdRemoveShoppingCart /><div>Remove from Cart</div></div>}/>
        </div>
        </div>
        
    )
}
export default ProductsItem;