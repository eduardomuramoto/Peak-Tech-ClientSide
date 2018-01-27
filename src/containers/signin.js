import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div className={this.props.signInOpen ? "signin-open" : "signin-closed"}>
        <form>
          <p className="contact-header">SIGN IN</p>
          <hr className="rule"/>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" id="input_email" className="form-control" placeholder="E-MAIL"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="input_last_name" placeholder="PASSWORD"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit">SUBMIT</button>
            </div>
          </div>
          </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    signInOpen: state.signInOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
