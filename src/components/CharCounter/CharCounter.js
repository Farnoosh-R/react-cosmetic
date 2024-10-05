import React, { useState } from "react";

const CharCounter = () => {

    const [char, setChar] = useState('');
    const [counter, setCounter] = useState(0);

    console.log(char)

    const charCounter = (e) => {
        setCounter(counter + 1)
        console.log(counter)
    }


    return(
        <div className="CharCounter">
        <input onChange={(e) => charCounter(e.target.value)} className="form-control" type="text" placeholder="enter char"/>
        <b className="output mt-3">{counter}</b>
        </div>
    )
}
export default CharCounter;