import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
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
    );
};

export default CommentDetail;