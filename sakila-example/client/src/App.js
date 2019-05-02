import React from 'react';
import './App.scss';
import StoreList from "./components/StoreList";

function App() {
  return (
    <div className="App container">
        <div className="col-1"/>
        <div className="col-4" id="menuContentPanel">
            <StoreList/>
        </div>
        <div className="col-6" id="mainContentPanel">

        </div>
        <div className="col-1"/>

    </div>
  );
}

export default App;
