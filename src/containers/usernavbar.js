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
        <nav>
          <button className="btn btn-dark" onClick={()=>this.openDirectory()}> Directory </button>
          <button className="btn btn-dark" onClick={()=>this.openEvents()}> Events </button>
          <button className="btn btn-dark" onClick={()=>this.openNews()}> News </button>
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
