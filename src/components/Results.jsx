import React from "react";

export default function Results({results, word}) {
    return (
        <>
            <h1 className="game__title">GAME OVER</h1>
            <h3 className="result">You {results}</h3>
            <h3 className="result">The word is {word}</h3>
            
        </>
    );
}