import React from "react";
import "./Search.css";

const ClearUser=(e)=>{
  
  window.localStorage.removeItem('user');
  window.location.reload();
};

export default function SearchBar(props) {
  
  return (
    <div className="SearchBar">

      <div className="leftofsearch">
        <i className="fab fa-instagram" />
        <div className="logotext">Instagram</div>
      </div>

      <div className="search">
        <i className="fas fa-search" aria-hidden="true" />
        <input name ='text' type='text' placeholder="Search" onChange={props.searchfn} />
      </div>

      <div className="rightofsearch">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
        <button onClick={ClearUser}>Logout</button>
      </div>
    </div>
  );
}
