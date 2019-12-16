import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// NewBook Component returns the form to add a new book

const newBook = (props) => {
    // for(let i=0; 1<props.bookFormCount ; i++) 
    console.log (props.flag);
    if (props.flag) {
        return (
            <Form onSubmit={props.storeInState}>
                <Container className="book-form">
                    <Row>
                        <Col md="8">
                            <Form.Group as={Row} controlId="formTitle">
                                <Form.Label column md="3" className="left-label">
                                    Title:
                                </Form.Label>
                            <Col md="9">
                                    <Form.Control as="input" type="text" name="title" className="left-value" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formDescription">
                                <Form.Label column md="3" className="left-label">
                                    Description:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="description" className="left-value" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formCateg">
                                <Form.Label column md="3" className="left-label">
                                    Categories:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="categories" className="left-value" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formAuthor">
                                <Form.Label column md="3" className="left-label">
                                    Author's Name:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="author" className="left-value" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPublisher">
                                <Form.Label column md="3" className="left-label">
                                    Publisher:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="publisher" className="left-value" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formYear">
                                <Form.Label column md="3" className="left-label">
                                    Year:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="published" className="left-value" onChange={props.storeInput}/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPages">
                                <Form.Label column md="3" className="left-label">
                                    Number of pages:
                                </Form.Label>
                            <Col md="9">
                                <Form.Control as="input" type="text" name="pages" className="left-value" onChange={props.storeInput}/>
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
                                    <Form.Control as="input" type="text" name="rating" onChange={props.storeInput}/>
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