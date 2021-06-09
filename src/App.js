import React,{useState, useRef, useEffect} from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState(" ");

  const inputRef=useRef(null);

  useEffect(()=>inputRef.current.focus());

  function handleClick(e){
    setResult(result+e.target.name);
  }

  function backspace(){
    setResult(result.slice(0,-1));
  }

  function clear(){
    setResult(" ");
  }

  function calculate(){
    try{
      setResult(eval(result).toString());
    }
    catch(error){
      setResult("Error");
    }
  }

  return (
    //<div className="body">
    <div className="calc-app">
    <h1>CALCULATOR</h1>
      <form>
        <input type="text" value={result} ref={inputRef}/>
      </form>

      <div className="keypad">
        <button  id="clear" onClick={clear}>Clear</button>
        <button id="backspace" onClick={backspace}>CE</button>
        <button id="sign"name="+" onClick={handleClick}>+</button>
        <button id="num" name="7" onClick={handleClick}>7</button>
        <button id="num" name="8" onClick={handleClick}>8</button>
        <button id="num" name="9" onClick={handleClick}>9</button>
        <button id="sign" name="-" onClick={handleClick}>-</button>
        <button id="num" name="4" onClick={handleClick}>4</button>
        <button id="num" name="5" onClick={handleClick}>5</button>
        <button id="num" name="6" onClick={handleClick}>6</button>
        <button id="sign" name="*" onClick={handleClick}>x</button>
        <button id="num" name="1" onClick={handleClick}>1</button>
        <button id="num" name="2" onClick={handleClick}>2</button>
        <button id="num" name="3" onClick={handleClick}>3</button>
        <button id="sign" name="/" onClick={handleClick}>/</button>
        <button id="zero" name="0" onClick={handleClick}>0</button>
        <button id="sign" name="." onClick={handleClick}>.</button>
        <button id="result" onClick={calculate}>Result</button>

      </div>
    </div>
    //</div>
  );
}

export default App;
