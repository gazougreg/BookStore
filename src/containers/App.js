import React, { Component } from 'react';
import data from '../assets/books.json';
import AddProduct from '../components/AddProduct/AddProduct';
import Search from '../components/Search/Search';
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
      alertFlag: false,
      tempBook: {},
      // validations: {},
      errors: []
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
    // let tempVal = this.state.validations;
    temp[name] = value ;
    // tempVal [name] = false;

    this.setState({tempBook : temp});
    //, validations : tempVal
  }



  //is called onSubmit in the form of the NewBook comp
  //stores the new book in state
  submitHandler = (event) => {
    event.preventDefault();

    // Object.values(this.state.validations).map((el)=> {
    //   if (!el) {
    //     this.setState({alertFlag: true});
    //     return null;
    //   } 
    // })
    let books = [...this.state.data.books];
    books.push(this.state.tempBook);
    

    //Validation check
    const errors = [];
    const regUp = /[A-Z]/;
    const regLow = /[a-z]/;
    const regNum = /[0-9]/;
    const regSymb = /[@"#&*! ]/;

    //Title validation:
    let tmpTitle = this.state.tempBook.title;
    if (tmpTitle.length < 10 || tmpTitle.length > 120) {
      errors.push("The title sould be at least 10 characters long and at most 120.");
    }
    for (let i=0; i < tmpTitle.length; i++) {
      let t = tmpTitle.charAt(i);
      //console.log(`TITLE: ${t}`);
      if (!(regUp.test(t) || regLow.test(t) || regNum.test(t) || regSymb.test(t))) {
        errors.push(`Invalid character ${t} in the Title.`);
      }
    }

    // Description validation:
    let tmpDescription = this.state.tempBook.description;
    //console.log(`DESCR: ${tmpDescription.charAt(0)}`);
    if (tmpDescription.length !==0 && (!regUp.test(tmpDescription.charAt(0)))) {
      errors.push("The description should start with an uppercase letter.");
    } 
    if (tmpDescription.length > 512) {
      errors.push("The description should be at most 512 characters long.")
    }

    // Categories validation:
    let tmpCat = this.state.tempBook.categories;
    if (tmpCat.length !== 0 && tmpCat.split(',').length > 4) {
      errors.push("You can assign only up to 4 categories to the book separated by comma.");
    }

    // Author validation:
    let tmpAuthor = this.state.tempBook.author;
    if (tmpAuthor.split(',').length >3) {
      errors.push("Please enter only up to 3 authors separated by comma.");
    }

    // Publisher validation:
    let tmpPublisher = this.state.tempBook.publisher;
    if (tmpPublisher.length < 5 || tmpPublisher > 60) {
      errors.push("The publisher sould be at least 5 characters long and at most 60.");
    }

    // Year validation:
    let tmpYear = this.state.tempBook.published;
    tmpYear = tmpYear.toString();
    if (tmpYear.length !== 4) {
      errors.push("The year should be 4 digits long.");
    }
    for (let i=0; i < tmpYear.length; i++) {
      let y = tmpYear.charAt(i);
      console.log(`YEAR: ${y}`);
      if (!regNum.test(y)) {
        errors.push("Please enter correct year. Only numbers are acceptable.");
        break;
      }
    }

    // Number of Pages validation:
    let tmpPages = this.state.tempBook.pages;
    if (tmpPages.length > 4) {
      errors.push("The number of pages can be up to 9999.");
    }
    for (let i=0; i< tmpPages.length; i++) {
      let p = tmpPages.charAt(i);
      console.log(`Pages: ${p}`);
      if (!regNum.test(p)){
        errors.push("Invalid number of pages.");
        break;
      }
    }

    // ISBN-10 validation:
    let tmpISBN10 = this.state.tempBook.isbn10;
    if (tmpISBN10) {
      if (tmpISBN10.length !== 10) {
        errors.push("Inavlid entry. ISBN-10 should consist of 10 digits.");
      }
      for (let i=0; i< tmpISBN10.length; i++) {
        let a = tmpISBN10.charAt(i);
        if (!regNum.test(a)){
          errors.push("Invalid ISBN-10. Only numbers are acceptable");
          break;
        }
      }
    }

    // ISBN-13 validation:
    let tmpISBN13 = this.state.tempBook.isbn;
    if (tmpISBN13) {
      if (tmpISBN13.length !== 13) {
        errors.push("Inavlid entry. ISBN-13 should consist of 13 digits.");
      }
      for (let i=0; i< tmpISBN13.length; i++) {
        let b = tmpISBN13.charAt(i);
        if (!regNum.test(b)){
          errors.push("Invalid ISBN-13. Only numbers are acceptable");
          break;
        }
      }
    }


    if (errors.length > 0) {
      this.setState({alertFlag:true, errors: errors});
    }
    else {
      console.log("I have found NO errors. Hooray!");
      let data ={...this.state.data};
      data.books = books;
      this.setState({data: data, alertFlag:false, errors: errors});
    }
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
          errors={this.state.errors}
        />
        <Search
          books={this.state.data.books}
        />
      </div>
    );
  }
}



export default App;
