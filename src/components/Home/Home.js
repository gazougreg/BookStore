import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {GiBookshelf} from 'react-icons/gi';
import ReactTooltip from 'react-tooltip'

const home = () => {
    return (
        <div className="Home">
            <ReactTooltip/>
            <a href="/search" data-tip="Find your new book!"><FiSearch size={90} className="search-icon"/></a>
            <a href="/book/add" data-tip="Add a book."><GiBookshelf size={90} className="book-icon"/> </a>  
        </div>
    );
}

export default home;