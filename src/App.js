import React, { useState } from 'react';
import './App.scss';

import { hash } from './util/hash';

function App() {

  const [jsRepeatNum, setJSRepeatNum] = useState(1);
  const [wasmRepeatNum, setWASMRepeatNum] = useState(1);
  const [jsRepeatResult, setJSRepeatResult] = useState(1);
  const [wasmRepeatResult, setWASMRepeatResult] = useState(1);

  // Validates the numbers put into the inputs because we use a text input.
  // Text input is used purely due to personal preference.
  function handleRepeatNumberInput(value, callback) {
    let inputNumber = Number(value);
    if(isNaN(inputNumber)) return;

    if(inputNumber < 1) {
      inputNumber = 1;
    } else if(inputNumber > 19283746) {
      inputNumber = 19283746;
    }

    callback(inputNumber);
  }

  function jsRepeat() {
    let startTime = Date.now();
    let result = hash("WASM is cool",jsRepeatNum);
    let endTime = Date.now();
    console.log(`Hash of WASM is cool with the repeat count of is ${result}. \n Finished in ${(endTime - startTime) / 1000} seconds.`);
    setJSRepeatResult(result);
  }

  return (
    <div className="App">
      <h1>React WASM Comparison</h1>
      <div className="js-vs-wasm">
        <div className="js">
          <h2>Javascript</h2>
          <hr />
          <div className="input-box">
            <label>Repeat Count: </label>
            <input type="text" value={jsRepeatNum} onChange={(e) => handleRepeatNumberInput(e.target.value, setJSRepeatNum)} />
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
            <label>Repeat Count: </label>
            <input type="text" value={wasmRepeatNum} onChange={(e) => handleRepeatNumberInput(e.target.value, setWASMRepeatNum)} />
          </div>
          <button>Get Result</button>
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
