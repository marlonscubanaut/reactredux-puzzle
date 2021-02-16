import React from 'react';

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Puzzle } from './features/puzzle/Puzzle';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React/Redux Sliding Puzzle</h1>
      <Puzzle />
    </div>
  );
}

export default App;
