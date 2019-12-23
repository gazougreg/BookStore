import React from 'react';
import {Breadcrumb, Container, Col, Row, Figure, Button} from 'react-bootstrap';
import defaultImage from '../../assets/books.jpg';
//import omensBook from '../../assets/omens.jpg';
import {MdPermIdentity} from 'react-icons/md';
import StarRating from 'react-svg-star-rating';

const productView = (props) => {
    console.log("ProductView");
    console.log(props);
    let book = props.location.state.book;
 return (
     <div className="ProductView">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
            <Breadcrumb.Item active>View</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
            <Row>
                <Col md="4" className="Col-left">
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
                        <StarRating isReadOnly={true} initialRating={book.rating}/>
                    </Row>
                </Col>
                <Col md="8" className="Col-right">
                    <Row>
                        <h3>{book.title}</h3>
                    </Row>
                    <Row>
                        {book.subtitle?book.subtitle:book.description}
                    </Row>
                    <Row>
                        <Button variant="outline-danger">Favorite</Button>
                        <Button variant="outline-info">Share</Button>
                    </Row>
                    <Row>
                        <p>Categories: {book.categories}</p>
                    </Row>
                    <Row>
                        <p>Year: {book.published}</p>
                    </Row>
                    <Row>
                        <p>Number of pages: {book.pages}</p>
                    </Row>
                    <Row>
                        <p>Publisher: {book.publisher}</p>
                    </Row>
                    <Row>
                        <p>ISBN-10: {book.isbn10}</p>
                    </Row>
                    <Row>
                        <p>ISBN-13: {book.isbn}</p>
                    </Row>
                    <Row>
                        <Button variant="outline-dark">BUY</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
     </div>
 );
}

export default productView;