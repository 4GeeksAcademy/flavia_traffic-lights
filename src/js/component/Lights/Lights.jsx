import React, { useState } from "react";
import "./style.css";

const Lights = () => {  
  //Estado para mantener el registro de las luces  
  const [lights, setLights] = useState(["red", "yellow", "green"]);
  const addPurpleLight = () => {
    setLights([...lights, "purple"]);
  };
  //Estado para hacer un seguimiento del color seleccionado
  const [color, setColor] = useState("red");
  const shuffleColor = () => {
    const randomColor = lights[Math.floor(Math.random() * lights.length)];
    setColor(randomColor);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          onClick={shuffleColor}
          id="btn-shuffle"
          type="button"
          className="btn btn-primary btn-lg"
        >
          Shuffle the light
        </button>
        <button
          onClick={addPurpleLight}
          id="btn-purple"
          type="button"
          className="btn btn-secondary btn-lg"
        >
          Add purple
        </button>
      </div>
      <div className="sujecion"></div>
      <div className="container-lights">
        {lights.map((lightColor, index) => (
          <div
            key={index}
            onClick={() => setColor(lightColor)}
            className={`light ${lightColor} ${
              color === lightColor ? " selected" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Lights;
