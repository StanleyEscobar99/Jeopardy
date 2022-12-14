import React from 'react'
import './App.css';
import GetQuestion from './Components/GetQuestion';
import {useState} from 'react';

function App() {

  return (
    <div className="App">
     <h1>Jeopardy!</h1>
     <GetQuestion/>
    </div>
  );
}



export default App;