import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const SearchBar = props => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon icon="" />
      <h1>Instagram</h1>
      <div className="searchFormDiv">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="searchBarIcons">
        <FontAwesomeIcon icon="compass" />
        <FontAwesomeIcon icon="heart" />
        <FontAwesomeIcon icon="user" />
      </div>
    </div>
  );
};

export default SearchBar;
