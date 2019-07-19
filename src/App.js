import React, { useState } from 'react';
import './App.scss';

import { createFibonacci } from './util/fibonacci';

function App() {

  const [jsNum, setJSNum] = useState(1);
  const [wasmNum, setWASMNum] = useState(1);
  const [jsRepeatResult, setJSRepeatResult] = useState("N/A");
  const [wasmRepeatResult, setWASMRepeatResult] = useState("N/A");

  // Validates the numbers put into the inputs because we use a text input.
  // Text input is used purely due to personal preference.
  function handleNumberInput(value, callback) {
    let inputNumber = Number(value);
    if(isNaN(inputNumber)) return;

    if(inputNumber < 1) {
      inputNumber = 1;
    } else if(inputNumber > 100) {
      inputNumber = 100;
    }

    callback(inputNumber);
  }

  function jsRepeat() {
    let startTime = Date.now();
    let result = createFibonacci(jsNum);
    let endTime = Date.now();
    console.log(`${jsNum} into Fibonacci(JS) is ${result}. \n Finished in ${(endTime - startTime) / 1000} seconds.`);
    setJSRepeatResult(`${(endTime - startTime) / 1000} seconds`);
  }

  function wasmRepeat() {
    let startTime = Date.now();
    let result = window._createFibonacci(wasmNum);
    let endTime = Date.now();
    console.log(`${wasmNum} into Fibonacci(C Compiled into WASM) is ${result}. \n Finished in ${(endTime - startTime) / 1000} seconds.`);
    setWASMRepeatResult(`${(endTime - startTime) / 1000} seconds`);
  }

  return (
    <div className="App">
      <h1>React WASM Comparison</h1>
      <div className="js-vs-wasm">
        <div className="js">
          <h2>Javascript</h2>
          <hr />
          <div className="input-box">
            <label>Hash Cycles: </label>
            <input type="text" value={jsNum} onChange={(e) => handleNumberInput(e.target.value, setJSNum)} />
          </div>
          <button onClick={jsRepeat}>Get Result</button>
          <div className="input-box">
            <label>Result: </label>
            <strong>{jsRepeatResult}</strong>
          </div>
        </div>
        <div className="wasm">
          <h2>Web Assembly</h2>
          <hr />
          <div className="input-box">
            <label>Hash Cycles: </label>
            <input type="text" value={wasmNum} onChange={(e) => handleNumberInput(e.target.value, setWASMNum)} />
          </div>
          <button onClick={wasmRepeat}>Get Result</button>
          <div className="input-box">
            <label>Result: </label>
            <strong>{wasmRepeatResult}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
