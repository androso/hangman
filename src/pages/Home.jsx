import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sounds } from '../data';
function Home() {

  return (
    <>
      <div className="hangman__container">
        <h1 className="hangman__title">HANGMAN</h1>
        <Link to="/game" className="button instructions" onClick={() => { sounds.click.play()}}>New Game</Link>

        <Link to="/instructions" className="button instructions" onClick={() => { sounds.click.play() }}>Instructions</Link>
        <p className="attribution">Made with 💖 by <a href="https://twitter.com/AnibalAndrade_" target="_blank">androso</a></p>
      </div>
    </>
  )
}

export default Home;