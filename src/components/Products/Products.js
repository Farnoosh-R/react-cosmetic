import React, { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";

const Products = () => {

    const [product, setProduct] = useState([]);

    const getData = async () => {
        const resProduct = await fetch('https://run.mocky.io/v3/e430d305-09dc-464c-9664-68362af0d394');
        const product = await resProduct.json();
        setProduct(product);
    }

    useEffect(() => {
        getData();
        console.log(product)
    }, [])

    return(
        <div className="Products">
        <h2 className="mb-5">Products</h2>
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