import React, { Component } from 'react';
import { MDBContainer, MDBJumbotron } from 'mdbreact';


const ThankYou = (props) => {
  return(
    <MDBJumbotron fluid className="morpheus-den-gradient">
      <MDBContainer>
        <h2 className="display-4">Name: {props.state.name}</h2>
        <h3 className="lead">Zip: {props.state.zip}</h3>
        <p>Hidden: {props.state.hidden}</p>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default ThankYou;
