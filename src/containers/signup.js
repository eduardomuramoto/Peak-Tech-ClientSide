import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div className={this.props.signUpOpen ? "signup-open" : "signup-closed"}>
        <label>Name</label>
        <input name="name" />

        <label>Email</label>
        <input name="email" />

        <label>Password</label>
        <input name="password" />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    signUpOpen: state.signUpOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
