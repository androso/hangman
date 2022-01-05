import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import {sounds} from '../data';

// Producing an array of letter from A to Z (uppercased)
// We do this in order to save time writing each 26 buttons :)
// More info: https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
const alphabetCharCode = Array.from(Array(26))
  .map((number, index) => index + 65);
const alphabet = alphabetCharCode.map(charCode => String.fromCharCode(charCode));


export default function Keyboard({setGameResults, placeholderWordRef, randomWordRef, keysPressed, keysPressedRef, setKeysPressed, setPlaceholderWord, setLivesLeft, livesLeftRef }) {
  //TODO validate if the letter we just pressed is valid

  const [invalidKey, _setInvalidKey] = useState('');
  const invalidKeyRef = useRef(invalidKey);
  const setInvalidKey = data => {
    invalidKeyRef.current = data;
    _setInvalidKey(data);
  }
  // const [results, setResults] = useState('');
  
  useEffect(() => {
    window.addEventListener('keydown', handlePhysicalKeyboardInput);
    return () => {
      window.removeEventListener('keydown', handlePhysicalKeyboardInput);
    };
  }, [])
  
  // useEffect(() => {
  //   setGameResults(results);
  //   return () => {
      
  //   };
  // }, [results]);
  
  return (
    <>
      <p className="game__instructions">Pick an alphabet below to guess the whole word.</p>
      <div className="game__letters">


        {alphabet.map(letter => {
          return (
            <Button
              key={letter}
              className={`game__letter ${keysPressed.includes(letter) ? 'pressed' : ""} ${invalidKey === letter ? 'wrong' : ""}`}
              handleClick={(event) => { handleTouchInput(event) }}
              inner={letter}
            />
          )
        })}
      </div>
    </>
  )

  function handleTouchInput(event) {
    const letter = event.target.dataset.letter.toUpperCase();
    
    if (keysPressed.includes(letter)) {

      setInvalidKey(letter);
        setTimeout(() => {
          setInvalidKey('');
        }, 150);
        sounds.wrong.play();
        return false;

    }
    sounds.click.play();
    setKeysPressed([...keysPressed, letter]);
    validateLetter(letter);
    

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
    
    if (randomWordRef.current.includes(letter)) {
      // We need to know if the letter the user guessed repeats multiple times in the randomWord, 
      // in order to display them at the same time in our screen
      let letterPositions = [];
      
      // we traverse the randomWordRef
        //If current letter === letter, we store that index in letterPosition
      [...randomWordRef.current].forEach((currentLetter, index) => {
        if (currentLetter === letter) {
          letterPositions.push(index);
        }
      })

      const newPlaceholder = placeholderWordRef.current.map((element, index) => {
        if (letterPositions.includes(index)) {
          return randomWordRef.current[index];
        } else {
          return element;
        }
      });
      
      if (newPlaceholder.join("") === randomWordRef.current) {
        setGameResults('won');
        // setResults('won');
      }
      setPlaceholderWord(newPlaceholder);
      
    } else {
      if (livesLeftRef.current - 1 === 0) {
        setGameResults('lost'); 
      } else {
        setInvalidKey(letter);
        setTimeout(() => {
          setInvalidKey('');
        }, 150);
      }
      // GAME ENDS WITH PLAYER LOOSING
      setLivesLeft(livesLeftRef.current - 1);
      
    }
  }
}

function Button({ className, handleClick, inner }) {
  return (
    <button
      className={className}
      onClick={handleClick}
      data-letter={inner}
    >{inner}</button>
  ); 
}