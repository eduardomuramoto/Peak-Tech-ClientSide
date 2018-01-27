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
    signInOpen: state.signInOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
