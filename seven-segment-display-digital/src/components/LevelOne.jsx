import React from "react";
import '../assets/styles/LevelOne.css';

function LevelOne({ number }) {
    const segments = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false
    };

    if (number === 0) {
        segments.a = true;
        segments.b = true;
        segments.c = true;
        segments.d = true;
        segments.e = true;
        segments.f = true;
    } else if (number === 1) {
        segments.b = true;
        segments.c = true;
    } else if (number === 2) {
        segments.a = true;
        segments.b = true;
        segments.d = true;
        segments.e = true;
        segments.g = true;
    } else if (number === 3) {
        segments.a = true;
        segments.b = true;
        segments.c = true;
        segments.d = true;
        segments.g = true;
    } else if (number === 4) {
        segments.b = true;
        segments.c = true;
        segments.f = true;
        segments.g = true;
    } else if (number === 5) {
        segments.a = true;
        segments.c = true;
        segments.d = true;
        segments.f = true;
        segments.g = true;
    } else if (number === 6) {
        segments.a = true;
        segments.c = true;
        segments.d = true;
        segments.e = true;
        segments.f = true;
        segments.g = true;
    } else if (number === 7) {
        segments.a = true;
        segments.b = true;
        segments.c = true;
    } else if (number === 8) {
        segments.a = true;
        segments.b = true;
        segments.c = true;
        segments.d = true;
        segments.e = true;
        segments.f = true;
        segments.g = true;
    } else if (number === 9) {
        segments.a = true;
        segments.b = true;
        segments.c = true;
        segments.d = true;
        segments.f = true;
        segments.g = true;
    }

    return (
        <div className="general-container-level-one__container-seven-segment">
            <div className="container-seven-segment__seven-segment">
                <div className={`seven-segment__segment-a led ${segments.a ? 'segment--led-on' : ''}`}></div>
                <div className={`seven-segment__segment-b led ${segments.b ? 'segment--led-on' : ''}`}></div>
                <div className={`seven-segment__segment-f led ${segments.f ? 'segment--led-on' : ''}`}></div>
                <div className="seven-segment__segment-space"></div>
                <div className={`seven-segment__segment-g led ${segments.g ? 'segment--led-on' : ''}`}></div>
                <div className={`seven-segment__segment-c led ${segments.c ? 'segment--led-on' : ''}`}></div>
                <div className="seven-segment__segment-space"></div>
                <div className={`seven-segment__segment-e led ${segments.e ? 'segment--led-on' : ''}`}></div>
                <div className={`seven-segment__segment-d led ${segments.d ? 'segment--led-on' : ''}`}></div>
            </div>
        </div>
    );
}

export default LevelOne;