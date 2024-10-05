import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductA = () => {

    const [product, setProduct] = useState([]);
    

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
            
    }, [])

    const {id} = useParams();
    console.log('param id', id)
    console.log(product)
    

    const filterProduct = product.find((item) => item.id === id)
    console.log('filterProduct', filterProduct)
    

    return(
        <div className="ProductA">

        {product.map((p) => {
            return(
                <h2>{p.title}</h2>
            )
        })}

        
        
        </div>
    )
}
export default ProductA;