import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import DummyData from './dummy-data';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: [],
      
    }
    console.log(this.state.dummyData)
  }
  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  componentDidMount(){
    console.log('CDM is running');
    fetch(DummyData)
    .then(
      this.setState({
        dummyData: DummyData,
      })
      )
      .catch(err => console.log('noooo'));
  }
  render() {
    console.log('Render is running');
    console.log(this.state.dummyData)
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post, i) =>{
          return <PostContainer handleChanges={this.handleChanges} key={i} post={post} />
        })}
      </div>
    );
  }
}

App.propTypes={
  dummyData: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timeStamp: PropTypes.string,
  })
}

export default App;
