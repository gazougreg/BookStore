import React from 'react';
import {Breadcrumb, Container, Col, Row, Figure, Button} from 'react-bootstrap';
import defaultImage from '../../assets/books.jpg';
import {MdPermIdentity} from 'react-icons/md';
import StarRating from 'react-svg-star-rating';

//When a book from the search results is clicked, 
//its details are displayed through the ProductView component.
const productView = (props) => {
    let book = props.location.state.book;
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
     </div>
 );
}

export default productView;