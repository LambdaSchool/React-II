import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

const CommentSection = props => (
  <div className="comment">
    <h1>{props.comment.username}</h1>
    <p>{props.comment.text}</p>
  </div>
)

CommentSection.propTypes ={
  comments: PropTypes.arrayOf(PropTypes.string)
}

export default CommentSection;