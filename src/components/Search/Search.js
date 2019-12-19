import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [selectedFilter, setFilter] = useState(0);

    const filters = ["Title", "Author", "Category", "Publisher", "Year"];

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    const filterChangeHandler = (event) => {
        setFilter(event.target.value);
    }

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        // console.log("searchTerm");
        // console.log(searchTerm);
        // console.log("filter");
        console.log("props.books");
        console.log(props.books);
        let f = filters[selectedFilter].toLowerCase();
        let tmpResult = [];
        props.books.map((el,index)=>{
            if (props.books[index][f].includes(searchTerm)){
                tmpResult.push(props.books[index]);
            }
            
        })
        setSearchResult(tmpResult);
        
        //setSearchResult()
    }
    console.log("mini State:");
    console.log(searchTerm);
    console.log("RESULTS!!!!")
    console.log(searchResult);
    return (
        <form onSubmit={searchSubmitHandler}>
            <input type="text" placeholder="Search" className="search-bar" onChange={searchChangeHandler}/>
            <input type="submit" style={{display:"none"}}/>
            <Row>
                {filters.map((filter,index)=> {
                    return (
                        <Col>
                            <div>
                                <input type="radio" value={index} className="btn-filter" checked={selectedFilter==index} onChange={filterChangeHandler}/> {filter}
                            </div>
                        </Col>
                        );
                    })
                }
            </Row>
        </form>
    );
}

export default Search;