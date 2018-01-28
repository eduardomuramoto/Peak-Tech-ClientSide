import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class OrganizationShow extends React.Component {

  render() {
    return (
      <div className={this.props.aboutOpen ? "about-open" : "about-closed"}>
        <h3>Organization Show Page</h3>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    aboutOpen: state.aboutOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
