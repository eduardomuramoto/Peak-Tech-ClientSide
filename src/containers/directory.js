import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import WrappedContainer from './maps'

class Directory extends React.Component {
  render() {

    if(this.props.admin){
      return(
        <h1> ADMIN ORGANIZATIONS SHIT GOES HERE </h1>
      )
    }

    return (
      <div className={this.props.directoryOpen ? "directory-open" : "directory-closed"}>

        <WrappedContainer/>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen,
    admin: state.admin
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Directory);
