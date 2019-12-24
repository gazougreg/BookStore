import React from 'react';
import {Link} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import {GiBookshelf} from 'react-icons/gi';
import ReactTooltip from 'react-tooltip';

//A simple home page with 2 icon/links
const home = () => {
    return (
        <div className="Home">
            <ReactTooltip/>
            <Link to={{pathname:"/search"}} data-tip="Find your new book!"><FiSearch size={90} className="search-icon"/></Link>
            <Link to={{pathname:"/book/add"}} data-tip="Add a book."><GiBookshelf size={90} className="book-icon"/> </Link>  
        </div>
    );
}

export default home;