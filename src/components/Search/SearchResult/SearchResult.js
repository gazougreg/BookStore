import React from 'react';
import {Row} from 'react-bootstrap';
import BookPreview from './BookPreview/BookPreview';

// SearchResult Component returns the result of the search, if any

const searchResult = (props) => {
 if (props.searchResult.length>0) {
    // let rows = props.searchResult.length / 4;
    // let finalRow = props.searchResult.length % 4;
    return (
        <div className="SearchResult">
            {/* <h4>Results</h4> */}
            <Row>
                {props.searchResult.map((book,index)=>{
                    return (
                        <BookPreview 
                            book={book}
                            index={index}
                            result={props.searchResult}
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