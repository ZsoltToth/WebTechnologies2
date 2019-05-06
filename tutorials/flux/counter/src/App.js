import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CounterDisplay from "./counter/CounterDisplay";
import CounterActions from "./counter/CounterActions";

function App() {
  return (
    <div className="App">
        <div className="row">
            <button className="btn" onClick={()=>{CounterActions.increment()}}>+</button>
            <button className="btn" onClick={()=>{CounterActions.decresement()}}>-</button>
            <button className="btn btn-danger" onClick={()=>{CounterActions.reset()}}>Reset</button>
        </div>
        <CounterDisplay/>
        <CounterDisplay/>
        <CounterDisplay/>
        <CounterDisplay/>


    </div>
  );
}

export default App;
