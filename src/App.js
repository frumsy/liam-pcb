import React, { Component } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Top from './components/top/Top';

class App extends Component {
  state = {
    visible: 'hidden',   
}

loadTop = (isVisible) =>{
    console.log('called: ', isVisible);
    this.setState({visible: isVisible});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('user@liam-pcb.com$./profiles.sh')
              .callFunction(()=>this.loadTop('visible'))
              .start();
        }}/>
        <Top visible={this.state.visible}/>
        </header>
      </div>
    );
  }
}

export default App;
