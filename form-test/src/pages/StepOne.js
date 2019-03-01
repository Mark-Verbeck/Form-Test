import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class StepOne extends Component {

  state={
    zip:''
  }

  handleValueChange = (e) => {
    this.setState({ zip: e.target.value });
  }

  redirectToTarget = () => {
    this.props.history.push(`/two`);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.zip);
    this.setState({ zip: ''});
    this.redirectToTarget();
  }

  render(){
    return(
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={this.handleSubmit}>
            <p className="h4 text-center mb-4">Step 2</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              ZIP CODE
            </label>
            <input
              type="text"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={this.handleValueChange}
            />

            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">Submit</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default StepOne;
