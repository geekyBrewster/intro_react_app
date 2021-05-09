import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App_old';
import * as serviceWorker from './serviceWorker';



//Simple react component
const App = () => {
    const buttonText = { text: "Click Me!" };
    const labelText = "Enter name: ";
    const buttonStyle = { backgroundColor: 'blue', color: 'white'};

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={ buttonStyle }>
                {buttonText.text}
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
