import React, { useEffect, useState } from "react";

const CryptocurrencyList = () => {

    const [cryptocurrency, setCryptocurrency] = useState({});

    const getData = async () => {
        const resCryptocurrency = await fetch('https://api.kraken.com/0/public/Ticker')
        const cryptocurrencyData =  await resCryptocurrency.json()
        setCryptocurrency(cryptocurrencyData)
    }

    useEffect(() => {
        getData();
        
    }, [])

 
    

    return(
       <div className="CryptocurrencyList">
       


        {cryptocurrency && cryptocurrency.result && Object.entries(cryptocurrency.result).map(([key, item]) => {
            return(
            <div key={key}>
            <span className="text-success me-3">{item.a}</span>
            <span className="text-danger">{item.a[0]}</span>
            </div>
            )
            })}


       </div>
    )
}
export default CryptocurrencyList;