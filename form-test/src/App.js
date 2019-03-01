import React, { Component } from 'react';
import{BrowserRouter, Route} from 'react-router-dom';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import './App.css';


class App extends Component {
  state={
    zip: "",
    name:"",
    hidden: "This is the most profound hidden field data ever!!"
  }

  stepOneSubmit = (zip) => {
    this.setState( prevState => {
      return{
        zip: zip
      };
    });
  };

  stepTwoSubmit = (name) => {
    this.setState( prevState => {
      return{
        name: name
      };
    });
  };

  render() {


    return (
      <BrowserRouter>

        <div className="App">
        <a href="/one">Step One</a>
        <a href="/two">Step Two</a>
          <Route path='/one' render={(props) => <StepOne {...props} state={this.state} submit={this.stepOneSubmit} />} />
          <Route path='/two' render={(props) => <StepTwo {...props} state={this.state} submit={this.stepTwoSubmit} />} />
          <Route path='/three' render={(props) => <StepThree {...props} state={this.state} />} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
