import React from 'react';
import {Col,Image}  from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

//BookPreview Component returns the book preview for each book that matches the search 

const bookPreview = (props) => {
    console.log("BookPreview");
    console.log(props);
    return (
        <Col>
            {props.book.image?<Image src={props.book.image} rounded/>:null}
            <a href="" onClick={props.clickHandler}><h5>{props.book.title}</h5></a>
            <p>{props.book.author}</p>
            {props.flag?<Redirect to={{pathname:"/view",state:{book: props.book}}}/>:null}
        </Col>
        
    );
}

export default bookPreview;