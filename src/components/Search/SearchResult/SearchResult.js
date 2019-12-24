import React from 'react';
import {Row, Col} from 'react-bootstrap';
import BookPreview from './BookPreview/BookPreview';

// SearchResult Component returns the result of the search, if any.
//The individual book preview is returned by the BookPreview component.
const searchResult = (props) => {
 if (props.searchResult.length>0) {
    return (
        <div className="SearchResult">
            <Row>
                {props.searchResult.map((book,index)=>{
                    return (
                        <Col md="3" key={index}>
                            <BookPreview key={index}
                                book={book}
                                books = {props.books}
                            />
                        </Col>
                    );
                })}
            </Row>
            

        </div>
    );
 } else {
    return null;
 }}

export default searchResult;