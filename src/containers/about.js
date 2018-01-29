import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class About extends React.Component {

  render() {
    return (
      <div className={this.props.aboutOpen ? "about-open" : "about-closed"}>
        <h3>ABOUT</h3>
        <p>This project was created by: Eduardo, Anna, Ray, Gloria, Shaggy, Paul.</p>

      <p>Frontend technologies used for this app include React with Redux, AJAX and Bootstrap.</p>

          <p>Backend technologies used for this app include Ruby on Rails and Postgres.</p>
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
