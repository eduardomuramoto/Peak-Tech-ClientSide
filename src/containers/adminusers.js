import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class AdminUsers extends React.Component {
  render() {
    return (
      <div className={this.props.adminUsersOpen ? "adminusers-open" : "adminusers-closed"}>

        <h1> ADMIN USERS SHIT GOES HERE </h1>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    adminUsersOpen: state.adminUsersOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
