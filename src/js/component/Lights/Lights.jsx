import React, { useState } from 'react';
import "./style.css"

const Lights = () => {
    const [color, setColor] = useState("red")
    const lightsColors = ["red", "yellow", "green"]
    const shuffleColor = () => {
        const randomColor = lightsColors[Math.floor(Math.random() * lightsColors.length)];
        setColor(randomColor);
    };

    const [lights, setLights] = useState(["red", "yellow", "green"]);
    const addPurpleLight = () => {
        setLights([...lights, "purple"])
    }
    return (
        <div className='container'>
            <div className='btn-container'>
            <button onClick={shuffleColor} id="btn-shuffle" type="button" className="btn btn-primary btn-lg">Shuffle the color</button>
            <button onClick={addPurpleLight} id="btn-purple" type="button" className="btn btn-secondary btn-lg">Add a new color</button>
            </div>
            <div className='sujecion'></div>
            <div className='container-lights'>
                {
                    lights.map((lightColor, index) =>(<div key={index} onClick={() => setColor(lightColor)} className={`light ${lightColor} ${color === lightColor? " selected" : ""}`}></div>))
                }
            </div>
        </div>
    )
}
export default Lights;