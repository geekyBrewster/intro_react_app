import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    const imageStyle = {width: '40px', height: '30px', border: '1px solid black'};

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={!!props.imgSource ? props.imgSource : faker.image.avatar()} style={ imageStyle }/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;