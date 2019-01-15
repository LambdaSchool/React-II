import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';
import dummyData from './dummy-data';
class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }
  componentDidMount = () => {
    this.setState({
        posts: dummyData
    })
  }
  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <div className="main-content-container">
            {this.state.posts.map(post => {
            return <PostContainer post={post} />
          })}        
        </div>
        

      </div>
    );
  }
}

export default App;
