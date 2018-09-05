import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  render() {
    return <PostsPage />;
  }
}

const authent = Authenticate(App);

export default Authenticate(App);
