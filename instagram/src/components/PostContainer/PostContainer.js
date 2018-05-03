import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const Post = props =>{
    return (
        <CommentSection comments={props.postData.comments}/>
    )
}
const PostContainer = props =>{
    return (
        <div>
            {props.instaPost.map((postData, index) => {
                return (
                    <Post key={index} postData={postData} />
                );
            })}
        </div>
    )
}

export default PostContainer;