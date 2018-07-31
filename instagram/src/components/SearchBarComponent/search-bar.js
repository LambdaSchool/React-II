import React from 'react';
import './search-bar.css'
import Logo from './image';
import Title from './title';
import Search from './search';
import Actions from './action-image';

function SearchBar (props){
    return (
        <div className="Search-Bar">
            <Logo imgSrc={props.imgSrc} />
            <Title title={props.title} />
            <Search inputChange={props.inputChange} onClick={props.onClick} />
            <Actions />
        </div>
    )
}

export default SearchBar