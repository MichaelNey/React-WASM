import React, { useState } from 'react';
import './App.scss';

function App() {

  const [jsFactorialNum, setJSFactorialNum] = useState(1);
  const [wasmFactorialNum, setWASMFactorialNum] = useState(1);
  const [jsFactorialResult, setJSFactorialResult] = useState(1);
  const [wasmFactorialResult, setWASMFactorialResult] = useState(1);

  // Validates the numbers put into the inputs because we use a text input.
  // Text input is used purely due to personal preference.
  function handleFactorialNumberInput(value, callback) {
    let inputNumber = Number(value);
    if(isNaN(inputNumber)) return;

    if(inputNumber < 1) {
      inputNumber = 1;
    } else if(inputNumber > 99999) {
      inputNumber = 99999;
    }

    callback(inputNumber);
  }

  return (
    <div className="App">
      <h1>React WASM Factorial</h1>
      <div className="js-vs-wasm">
        <div className="js">
          <h2>Javascript</h2>
          <hr />
          <div className="input-box">
            <label>Factorialize: </label>
            <input type="text" value={jsFactorialNum} onChange={(e) => handleFactorialNumberInput(e.target.value, setJSFactorialNum)} />
          </div>
          <button>Get Result</button>
          <div className="input-box">
            <label>Result: </label>
            <strong>{jsFactorialResult}</strong>
          </div>
        </div>
        <div className="wasm">
          <h2>Web Assembly</h2>
          <hr />
          <div className="input-box">
            <label>Factorialize: </label>
            <input type="text" value={wasmFactorialNum} onChange={(e) => handleFactorialNumberInput(e.target.value, setWASMFactorialNum)} />
          </div>
          <button>Get Result</button>
          <div className="input-box">
            <label>Result: </label>
            <strong>{wasmFactorialResult}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
