import React from 'react';
import {Image}  from 'react-bootstrap';
import {Link} from 'react-router-dom';
import defaultImage from '../../../../assets/books.jpg';
import StarRating from 'react-svg-star-rating';

//BookPreview Component returns the book preview for each book that matches the search.
//Each book's title is a Link to the ProductView component (route path: "/view").
//The book object is passed as a parameter to the ProductView Component.
const bookPreview = (props) => {
    return (
        <div>
            {props.book.image?<Image className="SearchImg" src={props.book.image} rounded/>:<Image className="SearchImg" src={defaultImage}rounded/>}
            <Link 
            to={{
                pathname:"/view", 
                state: {book: props.book, books: props.books}
                }}>
                <h5>{props.book.title}</h5>
            </Link>
            {props.book.rating?<StarRating size={18} activeColor="#33a2fd" isReadOnly={true} initialRating={props.book.rating}/>:<h6>{props.book.author}</h6>}
        </div>
        
    );
}

export default bookPreview;