import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {User} from '../requests/users.js';

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
        first_name: "",
        last_name: "",
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

  signUp(){
    User
      .create({user: this.state})
      .then(data => {
        console.log(data)
      })
      this.props.signUpAction();
  }

  render() {
    return (
      <div className={this.props.signUpOpen ? "signup-open" : "signup-closed"}>

        <form className="sign-form">
          <p className="contact-header">SIGN UP</p>
          <hr className="rule"/>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_first_name" name="first_name" onInput={this.handleChange.bind(this)} value={this.state.first_name}  placeholder="FIRST NAME"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_last_name" name="last_name" onInput={this.handleChange.bind(this)} value={this.state.last_name}  placeholder="LAST NAME"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_email"  name="email" onInput={this.handleChange.bind(this)} value={this.state.email} placeholder="E-MAIL"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="password" className="form-control input_last_name" name="password" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="PASSWORD"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">

              <button type="button" className="form-submit" onClick={()=>this.signUp()}>SUBMIT</button>

            </div>
          </div>
          </form>

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
    signUpAction: () => { dispatch(actions.signUp())}
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
