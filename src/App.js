import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const buttonText = "Click Me!";

    return (
      <div className="App">
        <header className="App-header">
          <label className="label" for="animal">
            Enter animal:
          </label>
          <input id="animal" type="text" />
          <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText /*Use curly braces to reference JS code*/}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
