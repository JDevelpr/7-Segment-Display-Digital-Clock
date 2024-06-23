import React, { useState } from "react";
import LevelOne from "./LevelOne";
import '../assets/styles/LevelTwo.css'

function LevelTwo() {
    const [number, setNumber] = useState(0);
    const increase = () => {
    let newNumber = number + 1;
    newNumber = newNumber % 10; 
    setNumber(newNumber);
    };
    return (
    <div className="container-level-two">
        <div className="container-level-two__seven-segment-two">
            <LevelOne number={number} />
        </div>
        <div className="container-level-two__container-button">
            <button className="container-button__button-ltwo" onClick={increase}>+1</button>
        </div>
    </div>
    );
}

export default LevelTwo;