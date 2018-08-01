import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import fuzzy from 'fuzzy';

class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[],
      filteredPosts:[],
      searchBarValue:'',

    }
  }
  componentDidMount(){
    this.setState({posts:dummyData});
  }
  
  handleSearchBarChange=(event)=>{
    this.setState({searchBarValue:event.target.value},()=>this.filterPosts());
  }
  filterPosts=()=>{
    let postsToBeFiltered=this.state.posts.slice();
    let filteredPosts=postsToBeFiltered.map(e=>e.username);
    filteredPosts=fuzzy.filter(this.state.searchBarValue,filteredPosts);
    filteredPosts=filteredPosts.map(e=>e.string);
    postsToBeFiltered=postsToBeFiltered.filter((e)=>filteredPosts.indexOf(e.username)!==-1);
    this.setState({filteredPosts:postsToBeFiltered});
  }
  liked=(data)=>{
    const postsCopy=this.state.posts.slice();
    postsCopy.forEach(e=>{if(e===data && e.liked===undefined){e.likes+=1; e.liked=true;}});
    return this.setState({posts:postsCopy});
  }
  render() {
    return (
      <div className="App">
      <SearchBar searchValue={this.state.searchBarValue} handleInputChange={this.handleSearchBarChange}/>
      <div className='posts'>
      {this.state.searchBarValue==='' ?
      this.state.posts.map((e)=><PostContainer data={e} key={e.imageUrl} liked={this.liked}/>):
      this.state.filteredPosts.map((e)=><PostContainer data={e} key={e.imageUrl}/>
    )}
      </div>
      </div>
    );
  }
}

export default App;
