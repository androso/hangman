import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import {sounds} from '../data';

// Producing an array of letter from A to Z (uppercased)
// We do this in order to save time writing each 26 buttons :)
// More info: https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
const alphabetCharCode = Array.from(Array(26))
  .map((number, index) => index + 65);
const alphabet = alphabetCharCode.map(charCode => String.fromCharCode(charCode));


export default function Keyboard({keysPressed, keysPressedRef, setKeysPressed, randomWord, setPlaceholderWord }) {
  const [invalidKey, setInvalidKey] = useState('');
  
  useEffect(() => {
    window.addEventListener('keydown', handlePhysicalKeyboardInput);
    console.log(randomWord);
  }, [])

  return (
    <>
      <p className="game__instructions">Pick an alphabet below to guess the whole word.</p>
      <div className="game__letters">


        {alphabet.map(letter => {
          return (
            <Button
              key={letter}
              className={`game__letter ${keysPressed.includes(letter) ? 'pressed' : ""} ${invalidKey === letter ? 'wrong' : ""}`}
              handleClick={(event) => { verifyLetter(event) }}
              inner={letter}
              
            />
          )
        })}
      </div>
      <Link to="/" className="button game__trigger">Main Menu</Link>
    </>
  )

  function verifyLetter(event) {
    const letter = event.target.dataset.letter.toUpperCase();
    
    if (keysPressed.includes(letter)) {
      console.log('here')
      setInvalidKey(letter);
        setTimeout(() => {
          setInvalidKey('');
        }, 150);
        sounds.wrong.play();
        return false;
    }
    sounds.click.play();
    setKeysPressed([...keysPressed, letter]);
    
    if (randomWord.includes(letter)) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
  }
  
  function handlePhysicalKeyboardInput(event) {
    const letter = event.key.toUpperCase(); 
    if (letter >= 'A' && letter <= 'Z' && letter.length === 1) {
      
      //If letter already pressed
      if (keysPressedRef.current.includes(letter)){ 
        setInvalidKey(letter);
        setTimeout(() => {
          setInvalidKey('');
        }, 150);
        sounds.wrong.play();
        return false;
      }
      setKeysPressed([...keysPressedRef.current, letter]);
      sounds.click.play();
      validateLetter(letter);
    }
  }
  function validateLetter(letter) {
    
  }
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