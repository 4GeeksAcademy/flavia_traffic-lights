import React, { useState } from 'react';
import "./style.css"

const Lights = () => {
    const [color, setColor] = useState("red")
    const lightsColors = ["red", "yellow", "green"]
    const shuffleColor = () => {
        const randomColor = lightsColors[Math.floor(Math.random() * lightsColors.length)];
        setColor(randomColor);
    };

    return (
        <div className='container'>
            <div className='btn-container'>
            <button onClick={shuffleColor} id="btn-shuffle" type="button" className="btn btn-primary btn-lg">Shuffle the color</button>
            <button id="btn-purpure" type="button" className="btn btn-secondary btn-lg">Add a new color</button>
            </div>
            <div className='sujecion'></div>
            <div className='container-lights'>
                <div onClick={() => setColor("red")} className={`light red ${color === "red" ? " selected" : ""}`}></div>
                <div onClick={() => setColor("yellow")} className={`light yellow ${color === "yellow" ? " selected" : ""}`}></div>
                <div onClick={() => setColor("green")} className={`light green ${color === "green" ? " selected" : ""}`}></div>
            </div>
        </div>
    )
}
export default Lights;