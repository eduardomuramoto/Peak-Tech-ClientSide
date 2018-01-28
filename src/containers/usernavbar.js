import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class UserNavBar extends Component {

  openDirectory(){
    this.props.openDirectoryAction();
  }

  openEvents(){
    console.log(this.props.admin)
    this.props.openEventsAction();
  }

  openNews(){
    this.props.openNewsAction();
  }


  collapseClick(){
    let button = document.querySelector('.navbar-toggler').classList
    let navdrop = document.querySelector('.navbar-toggler').nextSibling.classList
      console.log(navdrop)
      if(button.value === "navbar-toggler" && navdrop.value ==="collapse navbar-collapse"){
        button.value = "navbar-toggler collapsed"
        navdrop.value ="collapse navbar-collapse show"
      } else {
        button.value = "navbar-toggler"

        navdrop.value ="collapse navbar-collapse"
      }
  }

  render(){



    return (
        <nav className="navbar navbar-expand-md fixed-top" id="navigation">
          <a className="navbar-brand" id="header" href="#">
            <img className="logo" src="images/peaktechlogo.png"/>
          </a>
          <button className="navbar-toggler" type="button" onClick={()=> this.collapseClick()} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
            MENU
          </button>
          <div id="dropshow" className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={()=>this.openDirectory()}>DIRECTORY <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openEvents()}>EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openNews()}>NEWS</a>
              </li>
            </ul>
          </div>
      </nav>

    )
  }
};

const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen,
    eventsOpen: state.eventsOpen,
    newsOpen: state.newsOpen,
    admin: state.admin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDirectoryAction: () => { dispatch(actions.openDirectory())},
    openEventsAction: () => { dispatch(actions.openEvents())},
    openNewsAction: () => { dispatch(actions.openNews())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);
