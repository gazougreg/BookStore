import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// NewBook Component returns the form to add a new book

const newBook = (props) => {
    return (
        <Form>
            <Container>
                <Row>
                    <Col md="8">
                        <Form.Group as={Row} controlId="formTitle">
                            <Form.Label column md="3" className="left-label">
                                Title:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formDescription">
                            <Form.Label column md="3" className="left-label">
                                Description:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formCateg">
                            <Form.Label column md="3" className="left-label">
                                Categories:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formAuthor">
                            <Form.Label column md="3" className="left-label">
                                Author's Name:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPublisher">
                            <Form.Label column md="3" className="left-label">
                                Publisher:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formYear">
                            <Form.Label column md="3" className="left-label">
                                Year:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPages">
                            <Form.Label column md="3" className="left-label">
                                Number of pages:
                            </Form.Label>
                        <Col md="9">
                            <Form.Control as="input" type="text" className="left-value"/>
                        </Col>
                        </Form.Group>
                    </Col>
                        
                    <Col md="4">
                        <Button onClick={props.imageButtonHandler} className="btn-imgUpload">
                            import image <br/>
                            .jpg .png .gif
                        </Button>
                        <Form.Control as="input" type="file" accept=".jpg,.png,.gif" ref={props.inputImage} style={{display:"none"}}/>
                        <Form.Group as={Row} controlId="formTitle">
                            <Form.Label column sm="4">
                                Options:
                            </Form.Label>
                            <Col md="8">
                                <Form.Control as="input" type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formTitle">
                            <Form.Label column md="4">
                                Rating:
                            </Form.Label>
                            <Col md="8">
                                <Form.Control as="input" type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formTitle">
                            <Form.Label column md="4">
                                ISBN-10:
                            </Form.Label>
                            <Col md="8">
                                <Form.Control as="input" type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formTitle">
                            <Form.Label column md="4">
                                ISBN-13:
                            </Form.Label>
                            <Col md="8">
                                <Form.Control as="input" type="text"/>
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default newBook;