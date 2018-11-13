import React, { Component } from 'react';

import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filter: '',
      commentText: '',
      logedInUser: 'therealbondor'
    }
  }

  componentDidMount(){
    this.setState({
     data: dummyData 
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    
    let newComment = { text: this.state.commentText, username: this.state.logedInUser};
    let newDataState = this.state.data;
    newDataState[index].comments.push(newComment);
    
    this.setState({
      data: newDataState,
      commentText: ''
    });
  };

  getData () {
    if (this.state.filter === '')
      return this.state.data;
    return this.state.data.filter(post => {
      return JSON.stringify(post).toLowerCase().includes(this.state.filter.toLowerCase());
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          handleInputChange={this.handleInputChange}
          filter={this.state.filter}
        />
        <Posts 
          data={this.getData()}
          commentText={this.state.commentText}
          handleInputChange={this.handleInputChange}
          addNewComment={this.addNewComment}
        />  
      </div>
    );
  }
}

export default App;
