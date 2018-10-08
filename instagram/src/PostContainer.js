import React from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection';

const PostContainer = (props) => {
    return (
    <section>

    {props.posts.map(item => <CommentSection count={props.count}submitHandler={props.submitHandler} key={item.timestamp} obj={item} />)}
    </section>
    )
}


export default PostContainer;