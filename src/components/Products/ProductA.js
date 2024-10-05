import React, { useEffect, useState, useRef, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import ContexTheme from "../Context/ContexTheme";
import ProductReducer from "./ProductReducer";
import './style.css'
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";




const ProductA = () => {

    const [product, setProduct] = useState([]);
    const productItemRef = useRef(null);
    const themeContextValue = useContext(ContexTheme);
    const [state, dispatch] = useReducer(ProductReducer, {added: true})

    const getData = async () => {
     
        try {
            const resProduct = await fetch('https://run.mocky.io/v3/e964b20f-f8e2-4e03-a6b1-f3f39ce00f48');
            const product = await resProduct.json();
            setProduct(product)
        } catch (error) {
            console.log(error)
        }
        }
        
        useEffect(() => {
            getData(); 
            productItemRef.current.classList.add('visible');
    }, [])

    const { id } = useParams();
    console.log('param id', id)
    console.log(product)
    

    const filterProduct = product.find((item) => item.id === Number(id))
    console.log('filterProduct', filterProduct)
    

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
        <div className="ProductA" ref={productItemRef}>

        {filterProduct && 
            <div>
            <div className="box mb-4">
            <img src={filterProduct.ads} />
            <p className="product-title">{filterProduct.title}</p>
            <p className="product-title text-success">{filterProduct.price}</p>
            <Button handleClick={handleAdded} btnStyle={{backgroundColor: themeContextValue.theme.color, border: themeContextValue.theme.color}} btnContent={state.added ? <div className="d-flex"><MdShoppingCart /><div>Add to Cart</div></div> : <div className="d-flex"><MdRemoveShoppingCart /><div>Remove from Cart</div></div>}/>
            </div>
            </div>
    }

        </div>
    )
}
export default ProductA;