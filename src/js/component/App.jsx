import React, { useState } from "react";
import RandomLights from "./RandomLights";
import Lights from "./Lights/Lights";

const App = () => {
  const [showLights, setShowLights] = useState(true);

  const differentTrafficLights = () => {
    setShowLights(!showLights);
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <button
          onClick={differentTrafficLights}
          className="btn btn-outline-warning"
          type="button"
        >
          Click to show a different traffic light ;)
        </button>
      </div>
      {showLights ? <Lights /> : <RandomLights />}
    </div>
  );
};

export default App;
