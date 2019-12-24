import React from 'react';
import NewBook from './NewBook/NewBook';
import {Breadcrumb, Alert} from 'react-bootstrap';
import {IoIosAdd} from 'react-icons/io';
import {Button} from 'react-floating-action-button';

// AddProduct Component returns the page in which the user can add a new book.
const addProduct = (props) => {
    return (
        <div>
            <Breadcrumb className="Crumbs">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Add Book</Breadcrumb.Item>
            </Breadcrumb>
            <h3>Add new book</h3>
            <Button
                tooltip="Add a new book!"
                styles={{backgroundColor: "#f5f5f5", color: "#3086b8", fontSize: "40px"}}
                onClick={props.bookFormViewer}>
                    <IoIosAdd/>
            </Button>  
            <NewBook
                flag={props.flag}
                inputImage={props.inputImage}
                imageButtonHandler={props.imageButtonHandler}
                storeInput={props.storeInput}
                storeInState={props.storeInState}
                ratingHandler={props.ratingHandler}
            />
            {/* An alert displayed if errors occured after form validation */}
            {props.alertFlag?<Alert  variant="danger">{props.errors.map((err)=><p>{err}</p>)}</Alert>:null}
            
        </div>
    );
}

export default addProduct;