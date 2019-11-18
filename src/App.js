import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
     <Greet  name="Bruce" superHero="Batman">
     <p>This is children props</p>
     </Greet>
     <Greet  name="Charls" superHero="Superman">
     <button>Action</button>
     </Greet>
     <Greet  name="Diana" superHero="WonderWomen"/>



     <Welcome name="Bruce" superHero="Batman">
     <p>This is children props</p> 
     </Welcome>
     <Welcome name="Charls" superHero="Superman"></Welcome>
     <Welcome name="Diana" superHero="WonderWomen"></Welcome>
    
     {/* <Hello /> */}
     
    </div>
  );
}

export default App;
