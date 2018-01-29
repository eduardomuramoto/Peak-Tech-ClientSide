import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class CurrentOrganization extends React.Component {
  render() {
    console.log('check me', this.props.currentOrganizationInfo);
    return (
      <div className={this.props.currentOrganizationOpen ? "currentorganization-open" : "currentorganization-closed"}>
        <h1>{this.props.currentOrganizationInfo.name}</h1>

        <h3>{this.props.currentOrganizationInfo.address}</h3>
        <h3>{this.props.currentOrganizationInfo.overview}</h3>
        <h3>{this.props.currentOrganizationInfo.employees}</h3>
        <h3>{this.props.currentOrganizationInfo.team_size}</h3>
        <h3>{this.props.currentOrganizationInfo.website}</h3>
        <h3>{this.props.currentOrganizationInfo.twitter}</h3>
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
