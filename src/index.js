import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import './index.css';
import * as serviceWorker from './serviceWorker';

//Simple react component
const App = () => {
    const buttonText = { text: "Click Me!" };
    const labelText = "Enter name: ";
    const buttonStyle = { backgroundColor: 'blue', color: 'white'};

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
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src="https://www.placecage.com/g/140/100"/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Nicholas
                        </a>
                        <div className="metadata">
                            <span className="date">Friday at 6:00pm</span>
                        </div>
                        <div className="text">
                            Hey Bill! Yeah, how about Saturday afternoon?
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src="https://www.fillmurray.com/140/100"/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            William
                        </a>
                        <div className="metadata">
                            <span className="date">Friday at 5:30pm</span>
                        </div>
                        <div className="text">
                            Hi Nick. How's thing? Up for a game of golf this weekend?
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()}/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Angelina
                        </a>
                        <div className="metadata">
                            <span className="date">Friday at 4:35pm</span>
                        </div>
                        <div className="text">
                            I'm bored. Anyone have any ideas for the weekend?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
