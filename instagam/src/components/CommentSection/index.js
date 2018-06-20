import React from 'react';
import './style.css';
// import InputSection from './InputSection';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.passedItem,
            text: '',
         }
    }
    handleChange = (e) => {
        console.log('e target value: ', e.target.value);
        this.setState({ text: e.target.value });
    }
    
    
    addcomment =(e) => {

    e.preventDefault();
    const newComment = { text: this.state.text, username: 'DDD' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, text: '' });
   
    
    }
      

    render() { 
     
        return (  
            <div className='commentArea'>
            {/* <form onSubmit={this.clickButton}>  */}
            {this.state.comments.map((item, i) => {
              return(
                <div key={i}>
                    <p className="user"><strong>{item.username}</strong>
                    <span className="comment">    {item.text}</span></p>
      
    
                </div>
              ) 
            })}
            <hr />
            <div className='footerCom'>
              <input
                    type='text'
                    placeholder='add comment here...'
                    name='comment'
                    onChange={this.handleChange}
                    />
                    <button  value="Submit" onClick={this.addcomment} />
                    </div>
            {/* </form> */}
        </div>
        )
    }
}
 
export default CommentSection;





// const CommentSection = (props) => {

//     console.log('comments sections: ', props)
//     return (
//         <div className='commentArea'>
//             {props.passedItem.map((item, i) => {
//                 return (
//                     <div key={i} className='postArea'><strong>{item.username}</strong> {item.text}</div>
//                 )
//             })}
            
//             <hr />
//              <div className='footerCom'>
//                 <InputSection 
//                     passedUrl={props.passedPropsFromPost.imageUrl}  
//                     comments={props.passedPropsFromPost.comments} changeInput={props.onchangeProps}  
//                     clickButton={props.onclickProp}/>
//             </div>
            
//         </div>
//     )
// }

// export default CommentSection;

