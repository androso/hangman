import React from 'react';
import {Link} from 'react-router-dom';
import {sounds} from '../data';

function Instructions() {
  return (
    <div className="hangman__container">
      <h1 className="instructions__title title">INSTRUCTIONS</h1>
      <h4 className="instructions__subtitle subtitle">Here are the instructions for Hangman!!</h4>
      <ul className="instructions__list">
        <li>When you start a new game, the machine will automatically pick a super random word 🙄</li>
        <li>Your job is to guess that word by guessing one letter at a time</li>
        <li>If you succesfully guess the world within 7 tries, you would've saved the world!</li>
        <li>But if you loose i hope you'd had a good life, say goodbye to everyone 👻</li>
      </ul>
      <Link 
        to="/" 
        className="button menu" 
        onClick={() => {sounds.click.play()}}
      >
        MAIN MENU
      </Link>
    </div>
  )
}
export default Instructions;