
import React from 'react';
import Counter from './Counter';

import './App.css';
import Home from './components/Home';

function App (){
  return (
    <div className= "App">
      <Counter/>
    </div>
  );
}


const App =() => {
  return(
    <div className="app">
      <Home/>

    </div>
  );

};


export default App;
