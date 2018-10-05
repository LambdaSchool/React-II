import React from 'react';
import "./SearchBar.css";
import logo from "../../img/Instagram-Logo.png";
import title from "../../img/Instagram-Title.png";
import compass from "../../img/compass-05.svg";
import heart from "../../img/heart-2.svg";
import person from "../../img/single-01.svg";
import ImagesComponent from "./SearchBar-TitleImages"
import InputComponent from "./SearchBar-Input"

export default function SearchBar(props){
    return (
        <div className={props.className}>
            <div className='title-images'>
                <ImagesComponent src={logo} alt='instagram-logo' className='logo' />
                <ImagesComponent src={title} alt='instagram-title' className='title' />
            </div>
            <div>
                <InputComponent placeholder='Search' className='search-input' />
            </div>
            <div className='title-icons'>
                <ImagesComponent src={compass} alt='compass-icon' />
                <ImagesComponent src={heart} alt='heart-icon' />
                <ImagesComponent src={person} alt='person-icon' />
            </div>
        </div>
    );
}