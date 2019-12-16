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
    this.state = {
      data,
      formFlag: false,
      alertFlag: true,
      tempBook: {},
      validations: {}
    };
    
  }

  //is called onClick in the "NewBook" Comp. & "clicks" the hidden image file input
  imageButtonHandler = () => {
    this.inputImage.current.click();
  }

  bookFormCounter = () => {
    this.setState({formFlag: true});
    // let counter =this.bookFormCount;
    // counter++;
    // this.setState({bookFormCount:counter})
    // console.log(this.state.bookFormCount);
  }

  //is called onChange in the form of the NewBook comp
  //it stores the input in state
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let temp = this.state.tempBook;
    let tempVal = this.state.validations;
    temp [name]= value ;
    tempVal [name] = false;

    this.setState({tempBook : temp, validations : tempVal});
  }

  //is called onSubmit in the form of the NewBook comp
  //stores the new book in state
  submitHandler = (event) => {
    event.preventDefault();

    Object.values(this.state.validations).map((el)=> {
      if (!el) {
        this.setState({alertFlag: true});
        return null;
      } 
    })
    let books = [...this.state.data.books];
    books.push(this.state.tempBook);
    this.setState({data: books});
  }

  

  render () {
    console.log('State:');
    console.log(this.state);
    return (
      <div>
        <h1>Bookstore</h1>
        <AddProduct 
          inputImage={this.inputImage}
          imageButtonHandler={this.imageButtonHandler}
          // bookFormCount={this.state.bookFormCount}
          alertFlag={this.state.alertFlag}
          flag={this.state.formFlag}
          bookFormCounter={this.bookFormCounter}
          storeInput={this.changeHandler}
          storeInState={this.submitHandler}

        />
        
      </div>
    );
  }
}



export default App;
