import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class Events extends React.Component {


  render() {
    return (
      <div>
        <h1>Events</h1>
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

export default connect(mapStateToProps, mapDispatchToProps) (Events);
