import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class UserNavBar extends Component {

  openDirectory(){
    this.props.openDirectoryAction();
  }

  openEvents(){
    this.props.openEventsAction();
  }

  openNews(){
    this.props.openNewsAction();
  }

  render(){
    return (
      <div>

        <nav className="navbar navbar-expand-md fixed-top" id="navigation">
        <a className="navbar-brand" id="header" href="#">
          {/* <img src="peaktechlogo.png"/> */}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          MENU
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          
          <li className="nav-item active">
            <a className="nav-link" href="#" onClick={()=>this.openDirectory()}>DIRECTORY <span class="sr-only"></span></a>
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



        <nav>
          {/* <button className="btn btn-dark" onClick={()=>this.openDirectory()}> Directory </button>
          <button className="btn btn-dark" onClick={()=>this.openEvents()}> Events </button>
          <button className="btn btn-dark" onClick={()=>this.openNews()}> News </button> */}
        </nav>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen,
    eventsOpen: state.eventsOpen,
    newsOpen: state.newsOpen,
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
