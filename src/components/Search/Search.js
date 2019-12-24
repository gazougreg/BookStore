import React, {useState} from 'react';
import {Row, Col, Breadcrumb, Container} from 'react-bootstrap';
import SearchResult from './SearchResult/SearchResult';

//Search Component returns the Search Page

//I used Hooks here, to store the search related data (eg searchTerm and searchResult). 
//These attributes are only used in the scope of a Search attempt 
//and thus they are not needed in the App state.
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [selectedFilter, setFilter] = useState(0);

    //Search filters. Adding a new value in the array results in a new filter in the search.
    //The name of each filter should match the keys of the book objects.
    const filters = ["Title", "Author", "Categories", "Publisher", "Published"];

    //It is called onChange in the search bar and stores the string input in the searchTerm.
    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    //It is called onChange by the filer(radio buttons) and stores the selected filter.
    const filterChangeHandler = (event) => {
        setFilter(event.target.value); 
    }

    //It is called onSubmit of the Search Form. 
    //It attempts to find the search term in the filtered attribute of the book array.
    //For a better search, search term and book data are both converted to lower case.
    const searchSubmitHandler = (event) => {
        event.preventDefault();

        let f = filters[selectedFilter].toLowerCase();
        let tmpResult = [];
        //checks which book entries match the searhTerm, if any
        props.books.map((book)=>{ 
            if (book[f] && book[f].toLowerCase().includes(searchTerm.toLowerCase())){
                tmpResult.push(book);
            }
            return null;
        })
        setSearchResult(tmpResult); // stores the result of the search
    }

    return (
        <div>
            <Breadcrumb className="Crumbs">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Search</Breadcrumb.Item>
            </Breadcrumb>
            <h2>Search to find your new book</h2>
            <Container className="SearchContainer">
                <form onSubmit={searchSubmitHandler}>
                    <input type="text" placeholder="Search..." className="SearchBar" onChange={searchChangeHandler}/>
                    <input type="submit" style={{display:"none"}}/>
                    <Row className="FiltersBar">
                        {filters.map((filter,index)=> {
                            return (
                                <Col className="Filters" key={index}>
                                    <div key={index}> 
                                        {/* Only one filter can be active at any time based on the selectedFilter variable */}
                                        <input key={index}
                                        type="radio" 
                                        value={index} 
                                        className="btn-filter" 
                                        checked={parseInt(selectedFilter)===parseInt(index)} 
                                        onChange={filterChangeHandler} 
                                        /> {filter}
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>  
                </form>
            </Container>
            <SearchResult 
                searchResult={searchResult}
            />
        </div>
    );
}

export default Search;