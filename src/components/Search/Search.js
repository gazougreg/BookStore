import React, {useState} from 'react';
import {Row, Col, Breadcrumb, Container} from 'react-bootstrap';
import SearchResult from './SearchResult/SearchResult';
import {Redirect} from 'react-router-dom';

//Search Component returns the Search Page

//with hooks, the search and its result are kept 
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [selectedFilter, setFilter] = useState(0);
    // const [viewFlag, setViewFlag] = useState(false);

    //search filters. Adding a new value in the array results a new filter in the search
    const filters = ["Title", "Author", "Categories", "Publisher", "Published"];

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
            if (book[f] && book[f].toLowerCase().includes(searchTerm.toLowerCase())){
                tmpResult.push(book);
            }
            return null;
        })
        setSearchResult(tmpResult); // stores the result of the search
    }

    // const bookClickedHandler = (book) => {
    //     //event.preventDefault();

    //     console.log("HANDLER");
    //     console.log(book);
    //     setViewFlag(true);
    //     return  <Redirect to={{
    //         pathname: "/view", 
    //         state: {bookView: book}
    //     }}
    //     />
    //     // return <h1>ska</h1>;
    // }

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
                                <Col className="Filters">
                                    <div> 
                                        {/* Only one filter can be active at any time based on the selectedFilter variable */}
                                        <input type="radio" value={index} id="btn-filter" checked={selectedFilter==index} onChange={filterChangeHandler}/> {filter}
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