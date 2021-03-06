import React from 'react';
import './App.scss';
import ItemList from "./components/ItemList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <div className="row">
          <div className="col-1"></div>
          <div className="col-4"><ShoppingCart/></div>
          <div className="col-6"><ItemList/></div>
          <div className="col-1"></div>
      </div>
    </div>
  );
}

export default App;
