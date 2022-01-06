import React from "react";
import { useEffect } from "react";
import {sounds} from "../data";
export default function Results({results, word}) {

    useEffect(() => {
        
        if (results === 'WON!!!') {
            sounds.win.play();
        } else if (results === 'lost :(') {
            sounds.lose.play();
        }
    }, []);

    return (
        <>
            <h1 className="game__title">GAME OVER</h1>
            <h3 className="result">You {results}</h3>
            <h3 className="result">The word is {word}</h3>
            
        </>
    );
}