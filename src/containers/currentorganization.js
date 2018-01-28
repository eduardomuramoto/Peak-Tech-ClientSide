import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class CurrentOrganization extends React.Component {

  render() {
    return (
      <div className={this.props.currentOrganizationOpen ? "currentorganization-open" : "currentorganization-closed"}>
        <h1>Current Organization</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    currentOrganizationOpen: state.currentOrganizationOpen,
    currentOrganizationInfo: state.currentOrganizationInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrganization);
