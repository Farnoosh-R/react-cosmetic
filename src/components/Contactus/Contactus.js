
import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import ContexTheme from "../Context/ContexTheme";
import {validateEmail} from './../../Utils/validateEmail';

const Contactus = () => {

    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [reqname, setReqname] = useState('')
    const [reqlast, setReqlast] = useState('')
    const themeContextValue = useContext(ContexTheme);

console.log(themeContextValue)

const handleChangeName = (e) => {
    setName(e);
    return name;
}

const handleChangeLast = (e) => {
    setLast(e)
    return last;
}

const handleValidate = (e) => {

    if (validateEmail(e)){
        setEmail(e)
    }else{
        console.log('email is not valid');
    }
}

const handleWelcome = () => {

    handleValidate();

    if (name == ''){
        setReqname(true)
        
    }else if (last == ''){
        setReqlast(true)
        
    }else {
        setReqname(false)
        setReqlast(false)
        alert(`welcome ${handleChangeName()} ${handleChangeLast()} to my shop`)
    }  
    
}

    return(
        <div className="Contactus">
        <div className="form-contact w-50 mx-auto">
        <input onChange={(e) => handleChangeName(e.target.value)} className="form-control mb-3" type="text" placeholder="Name" />
        {reqname && <div className="text-danger">required</div>}
        <input onChange={(e) => handleChangeLast(e.target.value)} className="form-control mb-3" type="text" placeholder="Last name" />
        {reqlast && <div className="text-danger">required</div>}
        <input onChange={(e) => handleValidate(e.target.value)} className="form-control mb-3" type="text" placeholder="Email" />
        <Button  btnStyle={{backgroundColor: themeContextValue.theme.color}} handleClick={handleWelcome} btnContent={'Send'} />
        </div>
        </div>
    )
}
export default Contactus;