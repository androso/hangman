import React, {useEffect} from 'react';
import './App.css';
import { sounds, wordsList } from './data';
import {Home, Instructions, GameScreen} from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
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