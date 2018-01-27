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

  render() {
    return (
      <div>
      <nav className="site-info footer-nav navbar-expand-md fixed-bottom" id="navigation">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a href="#" onClick={()=>this.openSignIn()}>Sign In</a>            </li>
          <li className="nav-item">
            <a href="#" onClick={()=>this.openSignUp()}>Sign Up</a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={()=>this.openAbout()}>About</a>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              Built and maintained by students from&nbsp;
              <a href="https://codecore.ca/">
                CodeCore
              </a>
            </li>
          </ul>
        </div>
    </nav>
  </div>

    // <div className="footer-nav">
    //   <div className ="row site-info">
    //     <div className="copyright-column">
    //       <a href="#" onClick={()=>this.openSignIn()}>Sign In</a>
    //       <a href="#" onClick={()=>this.openSignUp()}>Sign Up</a>
    //       <a href="#" onClick={()=>this.openAbout()}>About</a>
    //     </div>
    //
    //       <div className = "author-column">
    //         Built and maintained by students from&nbsp;
    //         <a href="https://codecore.ca/">
    //           CodeCore
    //         </a>
    //       </div>
    //   </div>
    // </div>


      // <div className="footer">
      //   <nav>
      //     <div className="footer-nav">
      //       <a href="#" onClick={()=>this.openSignIn()}>Sign In</a>
      //       <a href="#" onClick={()=>this.openSignUp()}>Sign Up</a>
      //       <a href="#" onClick={()=>this.openAbout()}>About</a>
      //     </div>
      //
      //   </nav>
      // </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSignInAction: () => { dispatch(actions.openSignIn())},
    openSignUpAction: () => { dispatch(actions.openSignUp())},
    openAboutAction: () => { dispatch(actions.openAbout())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
