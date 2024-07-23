
import React from 'react';
import Counter from './Counter';
import React from 'react';
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
    <div className="App">
      <Home/>

    </div>
  );

};


export default App;
