import { useState, useEffect } from "react";
import "./style.css";
function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    generateColor();
  }, [colorType]);

  function generateRandomHexColor() {
    const array = new Uint8Array(3);

    window.crypto.getRandomValues(array);
    let HexString = `#${array[0].toString(16).padStart(2, "0")}${array[1]
      .toString(16)
      .padStart(2, "0")}${array[2].toString(16).padStart(2, "0")}`;

    return HexString;
  }

  function getRandomRgbColor() {
    const array = new Uint8Array(3);
    window.crypto.getRandomValues(array);
    return `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
  }

  function generateColor() {
    if (colorType === "hex") {
      setColor(generateRandomHexColor());
    } else if (colorType === "rgb") {
      setColor(getRandomRgbColor());
    }
  }
  return (
    <div
      className="container"
      style={{
        display: "center",
        height: "100vh",
        width: "100vw",
        background: color,
      }}
    >
      <button
        onClick={() => {
          setColorType("rgb");
        }}
      >
        create RGB
      </button>
      <button
        onClick={() => {
          setColorType("hex");
        }}
      >
        create HEX
      </button>
      <button onClick={() => generateColor()}>Generate random Color</button>

      <h2> {"Color Type: " + colorType}</h2>

      <h2> {color}</h2>
    </div>
  );
}

export default RandomColor;
