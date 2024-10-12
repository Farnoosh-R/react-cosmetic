import React, { useEffect, useState, useRef, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import ContexTheme from "../Context/ContexTheme";
import ProductReducer from "./ProductReducer";
import './style.css'
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";


const API_URL = 'https://script.google.com/macros/s/AKfycbyQ41PX9mTmziMPQrn2ENAeMMi5EgS91MqDdWuywLk3m5Ls3jVSCzyrSKnIEe0Z3-Kf/exec';

const getData = async () => {
    try {
        const res = await fetch(API_URL)
        if (res){
            const { data } = await res.json()
            return data;
        }else{
            return 'there is no data'
        }
    } catch (error) {
        console.log(error)
    }
}




const ProductA = () => {

    const [product, setProduct] = useState([]);
    const productItemRef = useRef(null);
    const themeContextValue = useContext(ContexTheme);
    const [state, dispatch] = useReducer(ProductReducer, {added: true})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const showData = async () => {
            const result = await getData()
            if (result) {
                setProduct(result)
                setLoading(false)
            }else{
                setLoading(false)
                setError(true)
            }
        }

        showData();
    
    })



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
        {loading && <div>loading</div>}
        {error && <div>error</div>}
        {filterProduct && 
            <div>
            <div className="box mb-4">
            <img src={filterProduct.imgsrc} />
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