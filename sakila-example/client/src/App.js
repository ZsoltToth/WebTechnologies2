import React from 'react';
import './App.scss';
import StoreList from "./components/StoreList";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div className="App container-fluid">
        <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-4" id="menuContentPanel">
            <StoreList/>
            <CategoryList/>
        </div>
        <div className="col-md-6" id="mainContentPanel">

        </div>
        <div className="col-md-1"/>
        </div>
    </div>
  );
}

export default App;
