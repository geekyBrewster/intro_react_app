import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CommentDetail from './components/CommentDetail';

//Simple react component
const App = () => {
    const buttonText = { text: "Click Me!" };
    const labelText = "Enter name: ";
    const buttonStyle = { backgroundColor: 'blue', color: 'white'};
    const imageSources = {Nick: "https://www.placecage.com/g/140/100", Bill: "https://www.fillmurray.com/140/100"};

    function getTime(){
        return (new Date()).toLocaleTimeString();
    }

    return (
        <div>
            <div>
                <label className="label" htmlFor="name">
                    {labelText}
                </label>
                <input id="name" type="text" />
                <button style={ buttonStyle }>
                    {buttonText.text}
                </button>
            </div>
            <hr/>
            <div>
                <div>Current time:</div>
                <h3>{getTime()}</h3>
            </div>
            <hr />
            <div className="ui container comments">
               <CommentDetail />
               <CommentDetail />
               <CommentDetail />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
