import React from 'react'; 
import "./SearchBar.css"; 

const SearchBar = props => {
    return (
        <div className = "searchBar">
            <div className = "logo">
                <i className="fab fa-instagram fa-2x"></i>
                <img className = "insta-logo" src = {require("./insta-logo.png")} alt = "Instagram logo"/>
            </div>
            <div className = "search">
                <input className = "search-input" type = "search" placeholder = " &#128269; Search"/>
            </div>
            <div className = "nav-icons">
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x"></i>
            </div>
        </div>
    )
}

export default SearchBar; 
