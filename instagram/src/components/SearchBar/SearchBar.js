import React from 'react';
import './SearchBar.css';



const SearchBar = () => {

const x = () => {
    console.log('test')
}


    return (
        <div className="insta-header">
            <span className="header-title">
            <i class="fab fa-instagram camera"></i>
               <span className="line">|</span> Instagram
            </span>
                <input onChange={x} type="text" placeholder="Search" className="header-input"></input>
            <span>
                <i class="far fa-compass"></i>
                <i class="far fa-heart heart"></i>
                <i class="far fa-user user"></i>
            </span>
        </div>
    )
}


export default SearchBar;