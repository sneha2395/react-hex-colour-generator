import React, { useEffect, useState } from "react";
import './simpleHex.css';
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colors = [];


/*this function returns a random number between 0 to 16 */
const generateRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

/*this function returns hex code color in string*/
const generateRandomColor = () => {
  let hexColor = "#";
1  ;for ( let i = 0; i < 6; i++) {
    const randomHexArrayIndex = generateRandomNumber();
    hexColor = hexColor + hex[randomHexArrayIndex];
  }
  return hexColor;
};
 
/* this function returns array containing 10 hex colors
*/
const generatePallete = () => {
   const colorPallete = [];
   

   for( let i = 0; i < 10; i++){
    let color = generateRandomColor();
    // console.log(generateRandomColor());
    colorPallete.push(color)
   } 
   console.log(colorPallete);
   return colorPallete;
   
}



const SimpleHexColor = () => {
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {

    const randomColors = generatePallete();
     colors = randomColors;

  });

  return (
    <div className="main_container">

      < button type="button" className="simple-button" onClick={() => setToggle(!toggle)}
      >Generate hex color</button>
      {/* <button onClick={() => setCount(count + 1)}></button> */}
      {toggle && (
        <div className="simpleHexContainer">
          <div className="stripe_simple_hex">
            {colors.map((color, index) => (
              <div className="stripe_color_box" style={{ width: '150px', height: '50px', color: "red", "background-color": color }}>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export { SimpleHexColor };



