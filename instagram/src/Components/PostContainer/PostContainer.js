import React from 'react';
import PostContent from './PostContent';
import './post.css';


class PostContainer extends React.Component {

    render () {
        return (
            <div className={"postWrap"}>
                <PostContent 
                commentHandler={this.props.commentHandler}
                dummyData={this.props.dummyData}/>
            </div>
        )
    }
}


export default PostContainer;