import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import WrappedContainer from './maps';
import {Organization} from '../requests/organizations.js';


class Directory extends React.Component {

  constructor(props){
    super(props);

    // this.state = {
    //   organizations: props.organizationList
    // }
  }

  componentDidMount(){
    this.props.fetchOrganizationsAction();

  }

  openCurrentOrganization(organization){
    // console.log(this.props);
    this.props.currentOrganizationAction(organization);
  }

  editOrganization(organization){
    this.props.editOrganizationAction(organization);
  }

  deleteOrganization(organization){
    console.log(organization);
    const filteredOrganizations = this.props.organizations.filter(org => org.id !== organization.id);
    Organization
      .destroy(organization.id)
       const newState = Object.assign({}, this.state, {organizations: filteredOrganizations});
       this.setState(newState);
  }

  render() {
    if (!this.props.organizations.length) return null;

    if(this.props.admin){
      return(
        <div className={this.props.directoryOpen ?"directory-open" : "directory-closed"}>
          <table>
            <thead>
              <tr className="admin-table-row">
                <th scope="col-md-12" className="admin-table-head">ORGANIZATION NAME</th>
                <th scope="col-md-12" className="admin-table-head">PUBLISHED</th>
                <th scope="col-md-12" className="admin-table-head">ACTION</th>
              </tr>
            </thead>
            { this.props.organizations.map(organization => (
              <tbody key={organization.id}>
                <tr>
                  <td>{organization.name}</td>
                  <td>Yes</td>
                  <td>
                    <a href="#" onClick={()=>this.props.currentOrganizationAction(organization)}>show</a>|
                    <a href="#" onClick={()=>this.props.editOrganizationAction(organization)}>edit</a>|
                    <a href="#" onClick={()=>this.deleteOrganization(organization)}>remove</a>
                  </td>
                </tr>
              </tbody>
            )) }
          </table>
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
            this.props.organizations.map(organization => (
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
    organizations: state.organizationList,
    admin: state.admin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentOrganizationAction: (organization) => { dispatch(actions.openCurrentOrganization(organization))},
    editOrganizationAction: (organization) => { dispatch(actions.editOrganization(organization))},
    fetchOrganizationsAction: () => { dispatch(actions.fetchOrganizations())}
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Directory);
