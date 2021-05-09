import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={!!props.imgSource ? props.imgSource : faker.image.avatar()}/>
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