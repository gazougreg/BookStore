import React, {useState} from 'react';
import {Breadcrumb, Container, Col, Row, Figure, Button} from 'react-bootstrap';
import defaultImage from '../../assets/books.jpg';
import {MdPermIdentity} from 'react-icons/md';
import StarRating from 'react-svg-star-rating';
import BookPreview from '../Search/SearchResult/BookPreview/BookPreview';
import ItemsCarousel from 'react-items-carousel';
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa';

//When a book from the search results is clicked, 
//its details are displayed through the ProductView component.
const ProductView = (props) => {
    let book = props.location.state.book;
    let books = props.location.state.books;
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    // For each category of the book in question, find all books that share that category.
    // These books will be displayed in the "Other Books you may like" section.
    const findRelevantBooks = () => {
        let relevantBooks = [];
        if (book.categories) {
            book.categories.split(",").map((category) => {
                books.map((b)=>{
                    // Do not add the book in the relevantBooks array:
                    //  1. if it is the book in question or
                    //  2. it already is in the array
                    if (b.categories && b.categories.toLowerCase().includes(category.toLowerCase())) {
                        if (!(relevantBooks.filter(e => e.title === b.title).length > 0) && (b.title !== book.title)) {
                            relevantBooks.push(b);
                        }
                    }
                    return null;
                });
                return null;
            }); 
        } 
        return relevantBooks;
    }
 return (
     <div className="ProductView">
        <Breadcrumb className="Crumbs">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
            <Breadcrumb.Item active>View</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
            <Row>
                <Col md="5" className="Col-left">
                    <Row>
                        <Figure>
                            <Figure.Image 
                            src={defaultImage}
                            width={206}
                            height={340}
                            fluid/>
                        </Figure>
                    </Row>
                    <Row>
                        <MdPermIdentity size={28}/> <p>{book.author}</p>
                    </Row>
                    <Row>
                        <StarRating activeColor="#33a2fd" isReadOnly={true} initialRating={book.rating}/>
                    </Row>
                </Col>
                <Col md="7">
                    <div className="BookIntro">
                        <Row>
                            <h3>{book.title}</h3>
                        </Row>
                        <Row>
                            <p>{book.subtitle?book.subtitle:book.description}</p>
                        </Row>
                    </div>
                    <Row>
                        <Button id="fav-btn" variant="outline-danger">Favorite</Button>
                        <Button id="share-btn" variant="outline-info">Share</Button>
                    </Row>
                    <div className="BookDits">
                        <Row>
                            <p>Categories: {book.categories}</p>
                        </Row>
                        <Row>
                            <p>Year: {book.published.substring(0,4)}</p>
                        </Row>
                        <Row>
                            <p>Number of pages: {book.pages}</p>
                        </Row>
                    </div>
                    <Row>
                        <p id="pub-par">Publisher: {book.publisher}</p>
                    </Row>
                    <div className="IsbnNum">
                        <Row>
                            <p>ISBN-10: {book.isbn10}</p>
                        </Row>
                        <Row>
                            <p>ISBN-13: {book.isbn}</p>
                        </Row>
                    </div>
                    <Row>
                        <Button id="buy-btn" variant="outline-dark">BUY</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
        {/* Below is the Carousel. It contains the relevant books, 4 active at a time */}
        <div style={{"padding":"0 60px","maxWidth":800,"margin":"0 auto"}}>
            {findRelevantBooks().length>0?<h4>Other books you may like:</h4>:null}
            <ItemsCarousel
                infiniteLoop
                gutter={10}
                activePosition={'center'}
                chevronWidth={60}
                alwaysShowChevrons={false}
                numberOfCards={4}
                outsideChevron={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                rightChevron={<button className="arrow-btn"><FaArrowCircleRight/></button>}
                leftChevron={<button className="arrow-btn"><FaArrowCircleLeft/></button>}
            >
                {findRelevantBooks().map((relevantBook, index) => {
                    return (
                        <BookPreview key={index} style={{height: 200}}
                            book={relevantBook} 
                            books={books}
                        />
                    )
                }
                )}
            </ItemsCarousel>
        </div>
     </div>
 );
}

export default ProductView;