import React, { Component, useState } from 'react';
import './App.css';
import Field from "./components/field";

class App extends Component {
  state = { displayText: false };
  toggleDisplayText = () => {
    this.setState({ displayText: !this.state.displayText });
  }

  /* Not "clear" way to set up state and a function - kept here for notes
  constructor (){
    super(); //calls constructor of parent class
    this.state = { displayText: false }; //add element to state object

    this.toggleDisplayText = this.toggleDisplayText.bind(this);
    //attach the 'this' of the component to the readMore function
    //then attahce this new function to the readMore function
  }

  toggleDisplayText(){
    this.setState({ displayText: !this.state.displayText }); //DO NOT DIRECTLY SET STATE - this.state.DisplayText = true; DON'T DO THIS!!
    //Inside .setState({ // stateObject key values to edit go here // })
  }
  */

  render() {
    const buttonText = "Click Me!";
    const [text] = useState("Greetings!");

    let extraText = this.state.displayText ? (<div>
                      <p>Oh boy, here is some text.</p>
                      <p>Oh look. There is some more text.</p>
                    <button onClick={this.toggleDisplayText}>Read Less</button>
                    </div>
                  ) : (
                    <div>
                    <button onClick={this.toggleDisplayText}>Read More</button>
                    </div>
                  ); //need to enclose block of JSX for element inside parens

    //evaluate state to determine if to display something
    //if(!this.state.displayText) {
      //extraText = null; //Nulls are skipped when rendering
    //}

    //UI ELEMENTS TO RETURN, INSIDE RENDER
    return (
      <div className="App App-header">
        <div>
          <h1>Hello there!</h1>
        </div>
        <div>
        {extraText /*Use curly braces to reference JS code*/}
        </div>
        <div>
          <label className="label" htmlFor="animal">
            Hi, I am an input:
          </label>
          <input id="inputText" type="text" />
          <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText /*Use curly braces to reference JS code*/}
          </button>
        </div>
        <div>
        <Field label="Enter input:" value={text}/>
      </div>
      </div>
    );
  }
}

export default App;
