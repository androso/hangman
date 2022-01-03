import React from 'react';
import {Link} from 'react-router-dom';

export default function Keyboard() {
  return (
    <>
    <p className="game__instructions">Pick an alphabet below to guess the whole word.</p>
    <div className="game__letters">
      <button className="game__letter">a</button>
      <button className="game__letter">b</button>
      <button className="game__letter">c</button>
      <button className="game__letter">d</button>
      <button className="game__letter">e</button>
      <button className="game__letter">f</button>
      <button className="game__letter">g</button>
      <button className="game__letter">h</button>
      <button className="game__letter">i</button>
      <button className="game__letter">j</button>
      <button className="game__letter">k</button>
      <button className="game__letter">l</button>
      <button className="game__letter">m</button>
      <button className="game__letter">n</button>
      <button className="game__letter">o</button>
      <button className="game__letter">p</button>
      <button className="game__letter">q</button>
      <button className="game__letter">r</button>
      <button className="game__letter">s</button>
      <button className="game__letter">t</button>
      <button className="game__letter">u</button>
      <button className="game__letter">v</button>
      <button className="game__letter">w</button>
      <button className="game__letter">x</button>
      <button className="game__letter">y</button>
      <button className="game__letter">z</button>
    </div>
    <Link to="/" className="button game__trigger">Main Menu</Link>
    </>
  )

}
