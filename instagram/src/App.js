import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <PostsPage forceUpd={this.props.forceUpd}/>
        
      </div>
    );
  }
}

const App2 = Authenticate(App);

export default App2;
