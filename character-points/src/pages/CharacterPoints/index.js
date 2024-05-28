import React, { useState } from "react";

function CharacterAttributes({ totalPoints }) {
  const [leftPoints, setLeftPoints] = useState(totalPoints);
  const [healthPoints, setHealthPoints] = useState(0);
  const [staminaPoints, setStaminaPoints] = useState(0);
  const [speedPoints, setSpeedPoints] = useState(0);

  const handleSliderChange = (attribute, value) => {
    const maxValue = totalPoints === 1 ? 1 : Math.floor(totalPoints * 0.7);
    value = value > maxValue ? maxValue : value;
    let attributePoints;

    switch (attribute) {
      case "health":
        attributePoints = value + staminaPoints + speedPoints;
        if (attributePoints > totalPoints) break;
        setHealthPoints(value);
        break;
      case "stamina":
        attributePoints = value + healthPoints + speedPoints;
        if (attributePoints > totalPoints) break;
        setStaminaPoints(value);
        break;
      case "speed":
        attributePoints = value + staminaPoints + healthPoints;
        if (attributePoints > totalPoints) break;
        setSpeedPoints(value);
        break;
      default:
        break;
    }
    if (attributePoints <= totalPoints) setLeftPoints(totalPoints - attributePoints);
  }

  return (
    <div>
      Character stats: <span id="points">{ leftPoints }</span> points left.
      <div>
        <input
          type="range" 
          id="health" 
          min="0" 
          max={totalPoints} 
          value={healthPoints} 
          step="1"
          onChange={(e) => handleSliderChange("health", parseInt(e.target.value))}
        />
          Health
      </div>
      <div>
        <input 
          type="range" 
          id="stamina" 
          min="0" 
          max={totalPoints} 
          value={staminaPoints} 
          step="1" 
          onChange={(e) => handleSliderChange("stamina", parseInt(e.target.value))}
        />
          Stamina
      </div>
      <div>
        <input 
          type="range" 
          id="speed" 
          min="0" 
          max={totalPoints}
          value={speedPoints} 
          step="1"
          onChange={(e) => handleSliderChange("speed", parseInt(e.target.value))}
        />
          Speed
      </div>
    </div>
  );
}

export default CharacterAttributes;