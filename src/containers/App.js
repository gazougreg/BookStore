import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import data from '../assets/books.json';
import Home from '../components/Home/Home';
import AddProduct from '../components/AddProduct/AddProduct';
import Search from '../components/Search/Search';
import ProductView from '../components/ProductView/ProductView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);

    //Reference for hidden image upload button.
    this.inputImage = React.createRef();

    //State initialization with given data.
    //I get the book array from localStorage (first I check if it exists,else I load the given data).
    //The localStorage ensures the preservation of the books added to the system, 
    //which normally would be achieved by backend systems.
    this.state = {
      data: localStorage.getItem('storedData')?JSON.parse(localStorage.getItem('storedData')):data,
      formFlag: false,
      alertFlag: false,
      tempBook: {},
      errors: []
    };
    
  }

  //It is called onClick in the "NewBook" Comp. & "clicks" the hidden image file input
  imageButtonHandler = () => {
    this.inputImage.current.click();
  }

  //It is called onClick in "AddProduct" by the "add" button. 
  //When clicked, the flag is set so that the form will be displayed.
  bookFormViewer = () => {
    this.setState({formFlag: true});
  }

  //It is called onChange in the form of the NewBook component.
  //This function is used for every input of the form (except the "start rating" 
  //and stores the input in state.
  //A temp book is created and waits the form submission.
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let temp = this.state.tempBook;
    temp[name] = value ;
    this.setState({tempBook : temp});
  }

  //It stores the rating input as number in the temp book in state.
  ratingHandler = (rating) => {
    let book = this.state.tempBook;
    book.rating = rating;
    this.setState({tempBook: book});
  }



  //It is called onSubmit in the form of the NewBook component.
  //The necessary validations happen here before submission.
  //The validated book is stored in the book array in state and in localStorage.
  //In case of wrong input, a relevant error message will appear. 
  submitHandler = (event) => {
    event.preventDefault();

    let books = [...this.state.data.books];
    books.push(this.state.tempBook);
    

    //Validation check
    const errors = [];
    const regUp = /[A-Z]/;
    const regLow = /[a-z]/;
    const regNum = /[0-9]/;
    const regSymb = /[@"#&*:,!' ]/; //some special characters were added to accomodate a range of titles

    //Title validation:
    let tmpTitle = this.state.tempBook.title;
    if (tmpTitle.length < 10 || tmpTitle.length > 120) {
      errors.push("The title sould be at least 10 characters long and at most 120.");
    }
    for (let i=0; i < tmpTitle.length; i++) {
      let t = tmpTitle.charAt(i);
      if (!(regUp.test(t) || regLow.test(t) || regNum.test(t) || regSymb.test(t))) {
        errors.push(`Invalid character ${t} in the Title.`);
      }
    }

    // Description validation:
    let tmpDescription = this.state.tempBook.description;
    if (tmpDescription && (!regUp.test(tmpDescription.charAt(0)))) {
      errors.push("The description should start with an uppercase letter.");
    } 
    if (tmpDescription && (tmpDescription.length > 512)) {
      errors.push("The description should be at most 512 characters long.")
    }

    // Categories validation:
    let tmpCat = this.state.tempBook.categories;
    if (tmpCat && tmpCat.split(',').length > 4) {
      errors.push("You can assign only up to 4 categories to the book separated by comma.");
    }

    // Author validation:
    let tmpAuthor = this.state.tempBook.author;
    if (tmpAuthor.split(',').length >3) {
      errors.push("Please enter only up to 3 authors separated by comma.");
    }

    // Publisher validation:
    let tmpPublisher = this.state.tempBook.publisher;
    if (tmpPublisher && (tmpPublisher.length < 5 || tmpPublisher > 60)) {
      errors.push("The publisher sould be at least 5 characters long and at most 60.");
    }

    // Year validation:
    let tmpYear = this.state.tempBook.published;
    if (tmpYear) {
      tmpYear = tmpYear.toString();
      if (tmpYear.length !== 4) {
        errors.push("The year should be 4 digits long.");
      }
      for (let i=0; i < tmpYear.length; i++) {
        let y = tmpYear.charAt(i);
        if (!regNum.test(y)) {
          errors.push("Please enter correct year. Only numbers are acceptable.");
          break;
        }
      }
    }

    // Number of Pages validation:
    let tmpPages = this.state.tempBook.pages;
    if (tmpPages) {
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


    //If there are any errors, the alert flag is set on true
    //and the array with the error messages is stored in state.
    //The flag and the errors are used in the AssProduct to display relevant messages to the user.
    if (errors.length > 0) {
      this.setState({alertFlag:true, errors: errors});
    }
    else {
      console.log("I have found NO errors. Hooray!");
      let data ={...this.state.data};
      data.books = books;
      //If there are NO errors, the new book is stored in state and the flags are reset.
      this.setState({data: data, alertFlag: false, formFlag: false, errors: errors, tempBook: []});
      //All the books are stored in local storage.
      localStorage.setItem('storedData', JSON.stringify(data));
    }
  }
  

  //There are 4 routes, 3 for the requested pages and one for the Home page (the default).
  //The home page was added to make the user experience better.
  render () {
    return (
      <div>
        <h1>Bookstore</h1>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/book/add" render={()=> <AddProduct 
          inputImage={this.inputImage}
          imageButtonHandler={this.imageButtonHandler}
          alertFlag={this.state.alertFlag}
          flag={this.state.formFlag}
          bookFormViewer={this.bookFormViewer}
          storeInput={this.changeHandler}
          storeInState={this.submitHandler}
          errors={this.state.errors}
          ratingHandler={this.ratingHandler}
        /> }/>
          <Route path="/search" render={()=> <Search  books={this.state.data.books}/>}/>
          <Route path="/view" component={ProductView}/>
        </Switch> 
      </div>
    );
  }
}



export default App;
