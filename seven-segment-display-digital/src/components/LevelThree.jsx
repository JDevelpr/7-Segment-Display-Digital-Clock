import React, { useState, useEffect } from "react";
import '../assets/styles/LevelThree.css';
import LevelOne from "./LevelOne";

function LevelThree() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

    let hhString = hh.toString().padStart(2, '0');
    let mmString = mm.toString().padStart(2, '0');
    let ssString = ss.toString().padStart(2, '0');

    return (
        <div className="container-seven-segment-clock">
            <div className="container-seven-segment-clock__seven-segment-clock">
                <div className="seven-segment-clock__hours">
                    <LevelOne number={parseInt(hhString[0], 10)} />
                    <LevelOne number={parseInt(hhString[1], 10)} />
                </div>
                <div className="seven-segment-clock__minutes">
                    <LevelOne number={parseInt(mmString[0], 10)} />
                    <LevelOne number={parseInt(mmString[1], 10)} />
                </div>
                <div className="seven-segment-clock__seconds">
                    <LevelOne number={parseInt(ssString[0], 10)} />
                    <LevelOne number={parseInt(ssString[1], 10)} />
                </div>
            </div>
        </div>
    );
}

export default LevelThree;