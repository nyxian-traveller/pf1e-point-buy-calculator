import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormLabel } from 'react-bootstrap';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '25px'}}>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
