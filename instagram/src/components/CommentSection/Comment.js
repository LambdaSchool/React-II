import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;