import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar/Search.js';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends React.Component {
   constructor() {
    super();

    this.state = {
       data: []
    }
   }
   componentDidMount() {
      this.setState({
         data: dummyData
      })
   }

  render() {
    return (
      <div className="App">
        <Search  />
        {this.state.data.map(postObject=> <PostContainer key={postObject.timestamp} card={postObject} />)}
      </div>
    );
  }
}

export default App;
