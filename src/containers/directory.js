import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import WrappedContainer from './maps'

class Directory extends React.Component {
  render() {
    return (
      <div className={this.props.directoryOpen ? "directory-open" : "directory-closed"}>

        <WrappedContainer/>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Directory);
