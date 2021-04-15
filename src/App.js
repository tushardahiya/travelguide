import React, { useState } from "react";
import "./App.css";

const continentDictionary = {
  Europe: ["France", "Switzerland", "Greece"],
  Asia: ["India", "Japan", "South Korea", "Singapore"],
  Africa: ["Madagascar", "Mauritius", "South africa"],
  "Australia/Oceania": ["Australia", "New Zealand", "Fiji"],
};

const continentWeKnow = Object.keys(continentDictionary);

function App() {
  const [continent, setContinent] = useState([]);

  const continentClickHandler = (selectedContinent) => {
    let continent = continentDictionary[selectedContinent];
    setContinent(continent);
  };

  return (
    <div className="App">
      <h1>MY FAV COUNTRIES :)</h1>
      <div>
        <h4>
          Checkout my favorite countries. Select a continent to get started
        </h4>
        {continentWeKnow.map((continent) => (
          <button
            className="continent-button"
            key={continent}
            onClick={() => continentClickHandler(continent)}
          >
            {continent}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {continent.map((country) => (
          <div className="country" key={country}>
            {country}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
