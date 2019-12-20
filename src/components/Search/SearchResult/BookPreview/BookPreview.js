import React from 'react';
import {Col,Image}  from 'react-bootstrap';

//BookPreview Component returns the book preview for each book that matches the search 

const bookPreview = (props) => {
    console.log("BookPreview");
    console.log(props);
    return (
        <Col>
            {props.book.image?<Image src={props.book.image} rounded/>:null}
            <h5>{props.book.title}</h5>
            <p>{props.book.author}</p>
        </Col>
    );
}

export default bookPreview;