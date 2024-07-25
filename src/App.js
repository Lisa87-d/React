
import React from 'react';
import Counter from './Counter';
import './App.css';
import Home from './Components/Home';
import Navbar from '.Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';




function App () {
  return (
    <div className= "App">
      <Counter/>
    </div>
  ); 
};
  
const Application = () => {
  return (
    <div className= "Application">
      <Home/>

    </div>
    
  );
};




export default App;
