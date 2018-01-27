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

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }

  handleSubmit(){
    console.log('sign in');
  }

  render() {
    return (
      <div className={this.props.signInOpen ? "signin-open" : "signin-closed"}>
        <label>Email</label>
        <input name="email" onChange={this.handleChange.bind(this)} value={this.state.email} />

        <label>Password</label>
        <input name="password" onChange={this.handleChange.bind(this)} value={this.state.password} />

        <button className="btn btn-dark" onClick={()=>this.handleSubmit()}>Sign In</button>
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
