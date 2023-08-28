import React, { useState } from 'react';
import "./style.css"
const Lights = () => {
    const [color, setColor] = useState("red")
    return (
        <div className='container'>
            <div className='sujecion'></div>
            <div className='container-lights'>
                <div onClick={() => setColor("red")} className={`light red +${color === "red" ? " selected" : ""}`}></div>
                <div onClick={() => setColor("yellow")} className={`light yellow +${color === "yellow" ? " selected" : ""}`}></div>
                <div onClick={() => setColor("green")} className={`light green +${color === "green" ? " selected" : ""}`}></div>
            </div>
        </div>
    )
}
export default Lights;