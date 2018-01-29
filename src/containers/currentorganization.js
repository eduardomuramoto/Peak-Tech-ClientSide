import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import WrappedContainer from './maps';

class CurrentOrganization extends React.Component {
  render() {



    return (
      <div className={this.props.currentOrganizationOpen ? "currentorganization-open" : "currentorganization-closed"}>

        <div className="container container-main">
          <div className="row company-row">
            <div className="col-md-4">
              <img  src="https://d30y9cdsu7xlg0.cloudfront.net/png/621754-200.png"/>
            </div>
            <div className="col-md-5 info-container">

              <h3>{this.props.currentOrganizationInfo.name}</h3>
              <a href={this.props.currentOrganizationInfo.website}>(VISIT WEBSITE)</a>

              <p>{this.props.currentOrganizationInfo.overview}</p>
              <p>ADDRESS: {this.props.currentOrganizationInfo.address}</p>
              <p>EMPLOYEES: {this.props.currentOrganizationInfo.employees}</p>
              <p>TEAM SIZE: {this.props.currentOrganizationInfo.team_size}</p>

              <p>TWITTER: {this.props.currentOrganizationInfo.twitter}</p>
            </div>
            <div className="col-md-3 map-container">
              <WrappedContainer/>
            </div>
          </div>

        </div>









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
