import { useState } from "react";

const RandomColor = () => {
    const[color, setColor] = useState('#000')

    const getRgb =() => Math.floor(Math.random() *256)
    
}