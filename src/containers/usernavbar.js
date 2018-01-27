import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class UserNavBar extends Component {
  render(){
    return (
      <div>
        <nav>
          <button className="btn btn-dark"> Directory </button>
          <button className="btn btn-dark"> Events </button>
          <button className="btn btn-dark"> News </button>
        </nav>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);
