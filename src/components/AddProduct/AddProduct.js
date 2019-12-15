import React from 'react';
import NewBook from './NewBook/NewBook';
import Button from 'react-bootstrap/Button';

// AddProduct Component returns the page in which the user can add new products

const addProduct = (props) => {
    return (
        <div>
            <h2>Add new book</h2>
            <NewBook
                inputImage={props.inputImage}
                imageButtonHandler={props.imageButtonHandler}
            />
            <Button type="submit" className="btn-save">SAVE</Button>
        </div>
    );
}

export default addProduct;