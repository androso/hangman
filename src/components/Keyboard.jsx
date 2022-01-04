import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


// Producing an array of letter from A to Z (uppercased)
// We do this in order to save time writing each 26 buttons :)
// More info: https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3

const alphabetCharCode = Array.from(Array(26))
  .map((number, index) => index + 65);
const alphabet = alphabetCharCode.map(charCode => String.fromCharCode(charCode));


export default function Keyboard({ handleClick, keysPressed }) {

  return (
    <>
      <p className="game__instructions">Pick an alphabet below to guess the whole word.</p>
      <div className="game__letters">


        {alphabet.map(letter => {
          return (
            <Button
              key={letter}
              className={`game__letter ${keysPressed.includes(letter) ? 'active' : null}`}
              handleClick={(event) => { handleClick(event) }}
              inner={letter}
            />
          )
        })}
      </div>
      <Link to="/" className="button game__trigger">Main Menu</Link>
    </>
  )

}

function Button({ className, handleClick, inner }) {
  return (
    <button
      className={className}
      onClick={handleClick}
      data-letter={inner}
    >{inner}</button>
  )
}