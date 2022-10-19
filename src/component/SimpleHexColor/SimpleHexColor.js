import React, { useEffect, useState } from "react";
import './simpleHex.css';
const hexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const colors=["red", "green", "blue", "yellow", "pink", "black", "brown", "purple", "rgba(133,122,200", "rgba(155,344),567)"];

let hexColor = "#";
  
  for (let i = 0; i < 6; i++) {
    console.log(hexColor, i);
    hexColor += hexs[getRandomNumber()];
    console.log(hexColor, i);
  }

  
  function getRandomNumber() {
    return Math.floor(Math.random() * hexs.length);
  }

const SimpleHexColor = () => {
  const[toggle, setToggle]= React.useState(false);

  const[count, setCount] = useState(0);
  useEffect(() => {

       document.title = `you clicked ${count} times`;
      //  Math.floor(Math.random() *colors.length)
  });

  

  return (
    <div className="main_container">
      
        < button type="button" className="simple-button" onClick={() => setToggle(true)}
       >Generate hex color</button>
        {/* <button onClick={() => setCount(count + 1)}></button> */}
      {toggle &&(
      <div className="simpleHexContainer">
        <div className="stripe_simple_hex">
          {hexs.map((color, index) => (
            <div className="stripe_color_box" style={{ width: '150px', height: '50px', color: "red", "background-color": color }}>
              {/* <p>{{ index }}</p> */}
            </div>
          ))}
        </div>
      </div>
     ) }
    </div>
  );
}
export { SimpleHexColor };



