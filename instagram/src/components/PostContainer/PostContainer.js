import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import NewComment from '../CommentSection/NewComment';
import propTypes from 'prop-types';

const PostContainer = (props) => {
    return(
        <section className='post-container'>
    <PostHeader  username={props.data.username}
                   thumbnailUrl={props.data.thumbnailUrl}/>
                 <img className='post-cta-image' src={props.data.imageUrl}
           alt={props.data.username} />
      <PostContent likes={props.data.likes}
                   comments={props.data.comments}/>
      <section className="post-time">
       {props.data.timestamp}
      </section>
      <NewComment />
    </section>	    
    );
}
PostContainer.propTypes = {
    username: propTypes.object
  }
export default PostContainer;