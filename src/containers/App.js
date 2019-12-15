import React, { Component } from 'react';
import data from '../assets/books.json';
import AddProduct from '../components/AddProduct/AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);

    //reference for hidden image upload button
    this.inputImage = React.createRef();

    // state initialization with given data
    this.state = data; 
    
  }

  //is called onClick in the "NewBook" Comp. & "clicks" the hidden image file input
  imageButtonHandler = () => {
    this.inputImage.current.click();
  }

  render () {
    return (
      <div>
        <h1>Bookstore</h1>
        <AddProduct 
          inputImage={this.inputImage}
          imageButtonHandler={this.imageButtonHandler}
        />
      </div>
    );
  }
}



export default App;
