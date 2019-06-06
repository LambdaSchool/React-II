import React from 'react';
import Comment from './Comment';
import AddComment from "./AddComment";
import PropTypes from 'prop-types';
import AddComment from './CommentSection/AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        const id = this.props.postId;
    }

    addComment() {
        const newComment = { text: this.state.comment, username: 'damolaadewunmi' };
        const comments = this.state.comments.concat(newComment);

        this.setState({ comments, comment: '' });
    }

    commentChange(event) {
        this.setState({comment: event.target.value});
    };

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index ) => 
                    <Comment
                      key={index}
                      comment={comment}
                    />
                
                )};

                <AddComment
                    comment={this.state.comment}
                    onChange={this.commentChange}
                    submitComment={this.addComment}
                />

            </div>

        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;