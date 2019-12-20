import React from 'react';
import {Row} from 'react-bootstrap';
import BookPreview from './BookPreview/BookPreview';

// SearchResult Component returns the result of the search, if any

const searchResult = (props) => {
 if (props.searchResult.length>0) {
    // let rows = props.searchResult.length / 4;
    // let finalRow = props.searchResult.length % 4;
    return (
        <div>
            <h4>Results</h4>
            <Row>
                {props.searchResult.map((book)=>{
                    return (
                        <BookPreview 
                            book={book}
                        />
                    );
                })}
            </Row>
            

        </div>
    );
 } else {
    return null;
 }}

export default searchResult;