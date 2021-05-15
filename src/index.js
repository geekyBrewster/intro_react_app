import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

//Simple react component
const App = () => {
    const buttonText = { text: "Click Me!" };
    const labelText = "Enter name: ";
    const buttonStyle = { backgroundColor: 'blue', color: 'white', margin: '10px 5px'};
    const timeStyle = { color: 'blue', fontSize: '24px', fontFamily: 'Serif', margin: '10px 5px'};
    const imageSources = {Nick: "https://www.placecage.com/140/100", Bill: "https://www.fillmurray.com/300/200"};
    const comments = [
        "I'm bored. Anhyone have plans for the weekend?",
        "Hey Nick, want to play golf this weekend?",
        "Bill, I'm free this afternoon and would love to get in a couple rounds."
    ];

    function getTime(){
        return (new Date()).toLocaleTimeString();
    }

    return (
        <div>
            {/* Section below uses straight JSX */}
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
                <span>Current time:</span>
                <span style={ timeStyle }>{getTime()}</span>
            </div>
            <hr />
            {/* Section below uses components and props to pass in param data */}
            <div className="ui container comments">
               <CommentDetail 
                    author="Nick"
                    date="Saturday at 9:30 am" 
                    content={comments[2]} 
                    imgSource={imageSources.Nick}
                />
                <CommentDetail 
                    author="Bill"
                    date="Friday at 5:00 pm" 
                    content={comments[1]} 
                    imgSource={imageSources.Bill}
                />
                <CommentDetail 
                    author="Max"
                    date="Friday at 13:35 pm" 
                    content={comments[0]}
                />
            </div>
            <hr />
            {/* Section belonw passes along child component to parent component via props.children */}
            <div>
                <ApprovalCard>
                    <CommentDetail 
                        author="Bill"
                        date="Sunday at 1:20 pm" 
                        content='That was a great round of golf.'
                        imgSource={imageSources.Bill}
                    />
                </ApprovalCard>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
