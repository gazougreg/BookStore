import React from 'react';
import {Row, Col, Container, Button, Form} from 'react-bootstrap';
import StarRating from 'react-svg-star-rating';

// NewBook Component returns the form to add a new book

const newBook = (props) => {
    //if the "add" button is clicked the form is displayed.
    if (props.flag) {
        return (
            <Form onSubmit={props.storeInState}>
                <Container className="book-form">
                    <Row>
                        <Col md="8">
                            <Form.Group as={Row} controlId="formTitle">
                                <Form.Label column md="3">
                                    Title:
                                </Form.Label>
                            <Col md="9">
                                    <Form.Control as="input" type="text" name="title" required={true} onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formDescription">
                                <Form.Label column md="3" >
                                    Description:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="description" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formCateg">
                                <Form.Label column md="3">
                                    Categories:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="categories" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formAuthor">
                                <Form.Label column md="3">
                                    Author's Name:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="author" required={true} onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPublisher">
                                <Form.Label column md="3">
                                    Publisher:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="publisher" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formYear">
                                <Form.Label column md="3">
                                    Year:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="published" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPages">
                                <Form.Label column md="3">
                                    Number of pages:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="pages" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                        </Col>
                            
                        <Col md="4">
                            <Button onClick={props.imageButtonHandler} id="btn-imgUpload">
                                import image <br/>
                                .jpg .png .gif
                            </Button>
                            <Form.Control as="input" type="file" accept=".jpg,.png,.gif" name="image" onChange={props.storeInput} ref={props.inputImage} style={{display:"none"}}/>
                            <Form.Group as={Row} controlId="formOptions">
                                <Form.Label column sm="4">
                                    Options:
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control as="input" name="options" type="text" onChange={props.storeInput}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formRating">
                                <Form.Label column md="4">
                                    Rating:
                                </Form.Label>
                                <Col md="8">
                                    <StarRating size={20} activeColor="#33a2fd" name="rating" hoverColor="#4fc0f5" handleOnClick={props.ratingHandler}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formISBN10">
                                <Form.Label column md="4">
                                    ISBN-10:
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control as="input" type="text" name="isbn10" onChange={props.storeInput}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formISBN13">
                                <Form.Label column md="4">
                                    ISBN-13:
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control as="input" type="text" name="isbn" onChange={props.storeInput}/>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Button type="submit" id="btn-save">SAVE</Button>
            </Form>
        );
    } else {
        return null;
    }
}

export default newBook;