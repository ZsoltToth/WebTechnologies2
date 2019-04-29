import React from 'react';

import './style.scss';
import ItemList from './components/ItemList'
import ShoppingCart from "./components/ShoppingCart";

var scRef = React.createRef()

function selectItem(item){
  scRef.current.insertItem(item)
}

function App() {

  return (
    <div className="App container">
      <div className="row">
          <div className="col-1"></div>
          <div className="col-4"><ShoppingCart ref={scRef}/></div>
          <div className="col-6"><ItemList selectItem={selectItem}/></div>
          <div className="col-1"></div>
      </div>
    </div>
  );
}

export default App;
