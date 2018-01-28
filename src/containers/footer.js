import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class Footer extends React.Component {

  openSignIn(){
    this.props.openSignInAction();
  }

  openSignUp(){
    this.props.openSignUpAction();
  }

  openAbout(){
    this.props.openAboutAction();
  }

  openRegistration(){

    this.props.openRegistrationAction();
  }

  SignOut(){
    localStorage.removeItem('jwt');
    this.props.createTokenAction(false);
    this.props.createUserAction(null);
    this.props.signOutAction();
  }

  render() {
    return (


      <div className="footer-nav fixed-bottom">
        <div className =" site-info">
            {
              this.props.user ? (
                <div className="copyright-column">
                  <span>
                    Hello, {this.props.user}
                  </span>
                  <a href="#" onClick={()=>this.SignOut()}>SIGN OUT</a>
                  <a href="#" onClick={()=>this.openAbout()}>ABOUT</a>
                  <a href="#" onClick={()=>this.openRegistration()}>CREATE ORGANIZATION</a>
                </div>
              ):(
                <div className="copyright-column">
                  <a href="#" onClick={()=>this.openSignIn()}>SIGN IN</a>
                  <a href="#" onClick={()=>this.openSignUp()}>SIGN UP</a>
                  <a href="#" onClick={()=>this.openAbout()}>ABOUT</a>
                  <a href="#" onClick={()=>this.openRegistration()}>CREATE ORGANIZATION</a>
                </div>
              )
            }
            <div className="author-column">
            Built and maintained by students from&nbsp;
            <a href="https://codecore.ca/">
            CodeCore
          </a>
        </div>
      </div>
    </div>
  )
}
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSignInAction: () => { dispatch(actions.openSignIn())},
    openSignUpAction: () => { dispatch(actions.openSignUp())},
    openAboutAction: () => { dispatch(actions.openAbout())},
    openRegistrationAction: () => { dispatch(actions.openRegistration())},
    createTokenAction: (admin) => { dispatch(actions.createToken(admin))},
    createUserAction: (user) => { dispatch(actions.createUser(user))},
    signOutAction: () => {dispatch(actions.SignOut())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
