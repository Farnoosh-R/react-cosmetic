import React, { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";



const Products = () => {

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

    return(
        <div className="Products">
        <div className="row">
        {product.map((product) => {
            return(
                <ProductsItem data={product}/>
            )
        })}
        </div>
        </div>
    )
}
export default Products;