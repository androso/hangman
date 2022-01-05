import React, { useEffect, useState, useRef } from 'react';
import { Board, Keyboard, ResultsScreen } from "../components";
import { wordsList, sounds } from "../data";
import { Link } from "react-router-dom";

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


  const [gameResults, setGameResults] = useState(null);
  const [livesLeft, _setLivesLeft] = useState(7);
  const [randomWord, _setRandomWord] = useState("");
  const [placeholderWord, _setPlaceholderWord] = useState([...randomWord]);
  const [keysPressed, _setKeysPressed] = useState([]);

  // Because we can't keep track of the latest state of keysPressed inside of the event listener attached to the window (used to bing physical key with screen), we create a ref to keysPressed and another function that will update the state of the ref and original to the latest.
  // To access the latest state of keysPressed we do it via keysPressedRef.current
  const keysPressedRef = useRef(keysPressed);
  const setKeysPressed = data => {
    keysPressedRef.current = data;
    _setKeysPressed(data);
  }

  const randomWordRef = useRef(randomWord);
  const setRandomWord = data => {
    randomWordRef.current = data;
    _setRandomWord(data);
  }

  const placeholderWordRef = useRef(placeholderWord);
  const setPlaceholderWord = data => {
    placeholderWordRef.current = data;
    _setPlaceholderWord(data);
  }

  const livesLeftRef = useRef(livesLeft);
  const setLivesLeft = data => {
    livesLeftRef.current = data;
    _setLivesLeft(data);
  }

  useEffect(() => {
    const getRandomWord = () => {
      const randomIndex = getRandomIndex(wordsList);
      const randomWord = wordsList[randomIndex].toUpperCase();

      setRandomWord(randomWord);
      const placeholder = [...randomWord].map(letter => "_");
      setPlaceholderWord(placeholder);
    }
    getRandomWord();

  }, []);

  return (
    <div className="hangman__container">
      {gameResults ? (
        <ResultsScreen results={gameResults === "won" ? "WON!!!" : "lost :("} word={randomWord} />
        ) : (
          <>
          <p className="game__stats">Lives: {livesLeft}</p>
          <h1 className="game__title title">HANGMAN</h1>
          <Board />
          <div className="game__word">{placeholderWord}</div>
          <Keyboard
            keysPressed={keysPressed}
            setKeysPressed={setKeysPressed}
            keysPressedRef={keysPressedRef}
            randomWord={randomWord}
            setPlaceholderWord={setPlaceholderWord}
            placeholderWordRef={placeholderWordRef}
            setLivesLeft={setLivesLeft}
            randomWordRef={randomWordRef}
            setGameResults={setGameResults}
            livesLeftRef={livesLeftRef}
          />
        </>
      )}
      
      <Link to="/" onClick={() => { sounds.click.play() }} className="button game__trigger">Main Menu</Link>

    </div>

  )
}


function getRandomIndex(arr) {
  return Math.floor(Math.random() * (arr.length - 0) + 0);
}

