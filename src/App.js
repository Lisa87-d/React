
import React from 'react';
// import Counter from './Counter';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';




// function App () {
//   return (
//     <div className= "App">
//       <Counter/>
//     </div>
//   ); 
// };
  
const Application = () => {
  return (
    <div className= "Application">
      <Home/>

    </div>
    
  );
};

function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path = '/about' element={<About/>}/>
          <Route path = '/count' element={<Contact/>}/>


        </Routes>
        

      </div>
    </Router>
  )
}


export default App;
