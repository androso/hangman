import React, { useEffect, useState } from 'react';
import {Board, Keyboard} from "../components";
import { wordsList } from "../data";
// Render skeleton 
// We gotta pick a random word from WordsList (RandomWord)
// We display the placeholder of that word (wordPlaceholder)
  // We create a copy of the word [] inside of an array
    // We replace each letter for a _
    // We render those _ in our html
// We add event listeners to each letter
  // When clicked:
    // If first time we continue
      // We check if that word is inside of the RandomWord
        // If so, we get the index and replace the _ inside of wordPlaceholder for that letter
        // else we console.log('not right letter')
          // We discount a life
      // At the end we deactivate that letter
    // Else we do nothing

export default function GameScreen() {
  const [livesLeft, setLivesLeft] = useState(7);
  const [randomWord, setRandomWord] = useState("");
  
  

  useEffect(() => {
    const randomIndex = getRandomIndex(wordsList);
    setRandomWord(wordsList[randomIndex]);
  }, []);
  
  
  
  return(
    <div className="hangman__container">
      <p className="game__stats">Lives: {livesLeft}</p>
      <h1 className="game__title title">HANGMAN</h1>
      <Board />
      <div className="game__word">{randomWord}</div>
      
    </div>
  )
}
function getRandomIndex(arr) {
  return Math.floor(Math.random() * (arr.length - 0) + 0);
}