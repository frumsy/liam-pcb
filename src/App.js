import React, { Component } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Top from './components/top/Top'
let p = ()=>{console.log('p test')}
let loadTop = ()=>{
        
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('user@liam-pcb.com$./npm start')
              .callFunction(()=>loadTop())
              .start();
              }}/>
        <Top/> 
        </header>
      </div>
    );
  }
}

export default App;
