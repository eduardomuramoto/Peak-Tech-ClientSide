import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import WrappedContainer from './maps';
import {Organization} from '../requests/organizations.js';

class Directory extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      organizations: []
    }
  }

  componentDidMount(){
    Organization
      .all()
      .then(organizations=>{
        console.log(organizations);
        this.setState({organizations: organizations})
        console.log(this.state);
      })
  }

  openCurrentOrganization(organization){
    console.log(organization);
    // console.log(this.props);
    this.props.currentOrganizationAction(organization);
  }

  render() {

    if(this.props.admin){
      return(
        <div className={this.props.directoryOpen ?"directory-open" : "directory-closed"}>
            <h1> ADMIN ORGANIZATIONS SHIT GOES HERE </h1>
            <h1> ADMIN ORGANIZATIONS SHIT GOES HERE </h1>
            <h1> ADMIN ORGANIZATIONS SHIT GOES HERE </h1>
        </div>
      )
    }

    return (
      <div className={this.props.directoryOpen ? "directory-open" : "directory-closed"}>
        <div>
          <WrappedContainer/>
        </div>
        <div id="organization-list">
          {
            this.state.organizations.map(organization => (
              <div key={organization.id}>
                <span>{organization.name}</span>
                <span>Employees: {organization.employees}</span>
              <button key={organization.id} type="button" className="btn btn-dark" onClick={()=>this.props.currentOrganizationAction(organization)}> Show </button>
              </div>
            ))
          }
        </div>

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

const mapDispatchToProps = (dispatch) => {
  return {
    currentOrganizationAction: (organization) => { dispatch(actions.openCurrentOrganization(organization))}
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Directory);
