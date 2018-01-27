
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class Directory extends React.Component {
  render() {
    return (
      <div>
        <h1>Directory</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Directory);
