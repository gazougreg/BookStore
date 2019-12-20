import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import SearchResult from './SearchResult/SearchResult';

//Search Component returns the Search Page

//with hooks, the search and its result are kept 
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [selectedFilter, setFilter] = useState(0);

    //search filters. Adding a new value in the array results a new filter in the search
    const filters = ["Title", "Author", "Category", "Publisher", "Year"];

    //called onChange in the search bar
    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);//stores the string input in the searchTerm
    }

    //called onChange by the filer(radio buttons)
    const filterChangeHandler = (event) => {
        setFilter(event.target.value); // stores the selected filter
    }

    //called onSubmit 
    const searchSubmitHandler = (event) => {
        event.preventDefault();

        let f = filters[selectedFilter].toLowerCase();
        let tmpResult = [];
        //checks which book entries match the searhTerm, if any
        props.books.map((book)=>{ 
            if (book[f].includes(searchTerm)){
                tmpResult.push(book);
            }
        })
        setSearchResult(tmpResult); // stores the result of the search
    }

    return (
        <div>
            <form onSubmit={searchSubmitHandler}>
                <input type="text" placeholder="Search..." className="search-bar" onChange={searchChangeHandler}/>
                <input type="submit" style={{display:"none"}}/>
                <Row>
                    {filters.map((filter,index)=> {
                        return (
                            <Col>
                                <div> 
                                    {/* Only one filter can be active at any time based on the selectedFilter variable */}
                                    <input type="radio" value={index} className="btn-filter" checked={selectedFilter==index} onChange={filterChangeHandler}/> {filter}
                                </div>
                            </Col>
                        );
                    })}
                </Row>  
            </form>
            <SearchResult 
                searchResult={searchResult}
            />
        </div>
    );
}

export default Search;