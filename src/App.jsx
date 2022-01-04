import React, {useEffect} from 'react';
import './App.css';
import { sounds, wordsList } from './data';
import {Home, Instructions, GameScreen} from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // Instead of using routes that refresh the screen, let's make it a web app that has routes without reloading.

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/instructions" element={<Instructions/>} />
        <Route path="game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;