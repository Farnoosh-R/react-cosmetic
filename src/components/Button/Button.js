import React from "react";
import './style.css'

const Button = ({btnContent, handleClick, btnStyle}) => {
    return(
        <button onClick={handleClick} style={btnStyle} className="btn btn-primary">{btnContent}</button>
    )
}
export default Button;