import React from "react";
import './simpleHex.css';
const colors = ["red", "green", "blue", "yellow", "pink", "black", "brown", "purple", "rgba(133,122,200", "rgba(155,344),567)"];



const SimpleHexColor = () => {

  return (
    <div className="main_container">
      <div className="simpleHexButton">
        < button type="button" className="simple-button">Generate hex color</button>
      </div>
      <div className="simpleHexContainer">

        <div className="stripe_simple_hex">
          {/* <div className="stripe_color_box"  style={{width: '150px', height: '50px', color: "red", "background-color": "blue"}}> */}
          {/* <div className="stripe_color_box" style={{ width: '150px', height: '50px' }}> */}
          {colors.map((color, index) => (
            <div className="stripe_color_box" style={{ width: '150px', height: '50px', color: "red", "background-color": color }}>
              {/* <p>{{ index }}</p> */}
            </div>
          ))}
        </div>
      </div>

    </div>
    // </div>
  );
}
export { SimpleHexColor };



