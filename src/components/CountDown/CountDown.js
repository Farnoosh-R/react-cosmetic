import React, { useEffect, useState } from "react";
import './style.scss'

const CountDown = () => {

const [count, setCount] = useState(0)

const [second1, setSecond1] = useState(5)
const [second2, setSecond2] = useState(9)


const [minuts1, setMinuts1] = useState(5)
const [minuts2, setMinuts2] = useState(9)


const [hour1, setHour1] = useState(2)
const [hour2, setHour2] = useState(4)



useEffect(() => {

setTimeout(() => {
    setCount(count + 1)

    if (second2 > 0){
        setSecond2(second2 - 1)
        return
    }
    if (second1 > 0){
        setSecond1(second1 - 1)
        setSecond2(9)
        return
    }
    if (minuts2 > 0){
        setMinuts2(minuts2 - 1)
        setSecond1(5)
        setSecond2(9)
        return
    }
    if (minuts1 > 0){
        setMinuts1(minuts1 - 1)
        setMinuts2(9)
        setSecond1(5)
        setSecond2(9)
        return
    }
    if (hour2 > 0){
        setHour2(hour2 - 1)
        setMinuts1(5)
        setMinuts2(9)
        setSecond1(5)
        setSecond2(9)
    }
    if (hour1 > 0){
        setHour1(hour1 - 1)
        setHour2(4)
        setMinuts1(5)
        setMinuts2(9)
        setSecond1(5)
        setSecond2(9)
    }
        


    
}, 1000);

}, [count])

    return(
        <div className="CountDown">
        <div className="row justify-content-center">
        <div className="col-md-2">
        <div className="timer-box">
        <h2>{hour1}</h2>
        </div>
        <div className="timer-box">
        <h2>{hour2}</h2>
        </div>
        </div>

        <div className="col-md-2">
        <div className="timer-box">
        <h2>{minuts1}</h2>
        </div>
        <div className="timer-box">
        <h2>{minuts2}</h2>
        </div>
        </div>

        <div className="col-md-2">
        <div className="timer-box">
        <h2>{second1}</h2>
        </div>
        <div className="timer-box">
        <h2>{second2}</h2>
        </div>
        </div>
        </div>
        </div>
    )
}
export default CountDown;