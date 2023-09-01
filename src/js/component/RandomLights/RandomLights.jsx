import React, { useState } from "react";
import "./style.css";

const RandomLights = () => {
  const allColors = [
    "red",
    "yellow",
    "green",
    "blue",
    "pink",
    "orange",
    "aqua",
    "brown",
  ];

  // Un array de estados para los colores de cada luz
  const initialColors = ["aqua", "pink", "orange"];
  const [colors, setColors] = useState(initialColors);

  const changeColor = () => {
    // Un nuevo array de colores aleatorios
    const newColors = colors.map(() => {
      const randomIndex = Math.floor(Math.random() * allColors.length);
      return allColors[randomIndex];
    });

    // Actualiza el estado de los colores
    setColors(newColors);
  };

  const [light, setLight] = useState(initialColors);
  const shuffleLight = () => {
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    setLight(randomColor);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          onClick={changeColor}
          id="btn-shuffle"
          type="button"
          className="btn btn-primary btn-lg"
        >
          Shuffle colors
        </button>
        <button
          onClick={shuffleLight}
          id="btn-purple"
          type="button"
          className="btn btn-secondary btn-lg"
        >
          Shuffle the light
        </button>
      </div>
      <div className="sujecion"></div>
      <div className="container-lights">
        {colors.map((currentColor, index) => (
          <div
            key={index}
            onClick={() => setLight(currentColor)}
            className={`light ${currentColor} ${
              light === currentColor ? " selected" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RandomLights;
