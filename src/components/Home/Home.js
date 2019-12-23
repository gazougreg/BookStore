import React from 'react';
import {FiSearch} from 'react-icons/fi';
import {GiBookshelf} from 'react-icons/gi';
import Row from'react-bootstrap/row';

const home = () => {
    return (
        <Row>
            <FiSearch size={90} className="search-icon"/>
            <GiBookshelf size={90} className="book-icon"/>   
        </Row>
    );
}

export default home;