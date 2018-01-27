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

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }

  handleSubmit(){
    console.log('sign up');
  }

  render() {
    return (
      <div className={this.props.signUpOpen ? "signup-open" : "signup-closed"}>
        <label>Name</label>
        <input name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />

        <label>Email</label>
        <input name="email" onChange={this.handleChange.bind(this)} value={this.state.email}/>

        <label>Password</label>
        <input name="password" onChange={this.handleChange.bind(this)} value={this.state.password}/>
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
