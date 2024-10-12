import React, { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";

const API_URL = "https://script.google.com/macros/s/AKfycbyQ41PX9mTmziMPQrn2ENAeMMi5EgS91MqDdWuywLk3m5Ls3jVSCzyrSKnIEe0Z3-Kf/exec";

const fetchData = async () => {
    try {
      const response = await fetch(API_URL);

  
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

const Products = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false); 


    useEffect(() => {
        const fetchDataAsync = async () => {
          const result = await fetchData();
          if (result) {
            setData(result);
            setLoading(false);
          } else {
            setError(true);
          }
          
        };
    
        fetchDataAsync();
      }, []);
    

    return(
        <div className="Products">
        <div className="row">
        {loading && <div>
         <div className="row">
         {[1, 2, 3, 4, 5, 6, 7].map(() => {
            return(
                <div className="col-md-4">
                <img src="/placeholder.gif" />
                </div>
            )
        })}
         </div>
            </div>}
    
        {error && <div>Error loading data. Please try again later.</div>}
        {data.map((item) => (
            <ProductsItem data={item}/>
        ))}
        </div>
        </div>
    )
}
export default Products;