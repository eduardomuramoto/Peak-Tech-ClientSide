import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {Token} from '../requests/tokens';
import jwtDecode from 'jwt-decode';

class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }

    this.createToken = this.createToken.bind(this);
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }


  createToken() {
    const {onSignIn = () => {}} = this.props;
    const {email, password} = this.state;
    Token
      .create({email, password})
      .then(data => {
        if (!data.error) {
          const {jwt} = data;
          localStorage.setItem('jwt', jwt);
          //redirect
          onSignIn();
        }
      }).then(
        () => {
          const jwt = localStorage.getItem('jwt');
          const payload = jwtDecode(jwt);
          console.log(payload.full_name);
          this.props.createUserAction(payload.full_name);
          this.props.createTokenAction(payload.is_admin);
        }
      )
      const newState = Object.assign({}, this.state, {
      email: "", password: "",
      });
      this.setState(newState);
      console.log(this.props.admin);
  }

  render() {
    return (
      <div className={this.props.signInOpen ? "signin-open" : "signin-closed"}>
        <form>
          {
            this.props.postSignUpMessage ? (
              <p className="contact-header">SIGN IN TO YOUR NEW ACCOUNT</p>
            ) : (
              <p className="contact-header">SIGN IN</p>
            )
          }

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="input_email" name="email" className="form-control" placeholder="E-MAIL" onInput={this.handleChange.bind(this)} value={this.state.email}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="password" className="form-control input_last_name" name="password" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="PASSWORD"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" className="form-submit" onClick={()=>this.createToken()}>SUBMIT</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createTokenAction: (admin) => { dispatch(actions.createToken(admin))},
    createUserAction: (user) => { dispatch(actions.createUser(user))},
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
