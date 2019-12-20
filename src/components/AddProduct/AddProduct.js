import React from 'react';
import NewBook from './NewBook/NewBook';
import {Button, Breadcrumb, Alert} from 'react-bootstrap';

// AddProduct Component returns the page in which the user can add new products

const addProduct = (props) => {
    const flag=props.alertFlag;
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Add Book</Breadcrumb.Item>
            </Breadcrumb>
            <h2>Add new book</h2>
            <Button type="add" id="btn-add" onClick={props.bookFormCounter}> + </Button>
            <NewBook
                // bookFormCount={props.bookFormCount}
                flag={props.flag}
                inputImage={props.inputImage}
                imageButtonHandler={props.imageButtonHandler}
                storeInput={props.storeInput}
                storeInState={props.storeInState}
            />
            {flag?<Alert  variant="danger">{props.errors.map((err)=><p>{err}</p>)}</Alert>:null}
            
        </div>
    );
}

export default addProduct;