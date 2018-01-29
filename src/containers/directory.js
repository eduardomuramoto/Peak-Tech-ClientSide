import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import WrappedContainer from './maps';
import {Organization} from '../requests/organizations.js';

class Directory extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    }
  }

  componentDidMount() {
    this.props.fetchOrganizationsAction();
  }

  openCurrentOrganization(organization) {
    // console.log(this.props);
    this.props.currentOrganizationAction(organization);
  }

  editOrganization(organization) {
    this.props.editOrganizationAction(organization);
  }

  deleteOrganization(organization) {
    console.log(organization);
    const filteredOrganizations = this.props.organizations.filter(org => org.id !== organization.id);
    Organization.destroy(organization.id)
    const newState = Object.assign({}, this.state, {organizations: filteredOrganizations});
    this.setState(newState);
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
    console.log(this.state);
    this.props.fetchOrganizationsAction();
  }

  render() {
    const grabbedOrganizations = this.props.organizations.filter(organization => organization.name.includes(this.state.searchValue));
    if (!this.props.organizations.length) return null;

    if(this.props.admin){
      return(
        <div className={this.props.directoryOpen ?"directory-open" : "directory-closed"}>
          <div className="container main-container">
            <form className='admin-form'>
          <table className="table table-bordered">
            <thead>
              <tr className="admin-table-row">
                <th scope="col-md-12" className="admin-table-head">ORGANIZATION NAME</th>
                <th scope="col-md-12" className="admin-table-head">PUBLISHED</th>
                <th scope="col-md-12" className="admin-table-head">ACTION</th>
              </tr>
            </thead>
            <tbody >
            { this.props.organizations.map(organization => (

                <tr key={organization.id}>

                  <td scope="row" className="admin-data">{organization.name}</td>
                  <td className="admin-data">Yes</td>
                  <td className="admin-data">
                    <a href="#" onClick={()=>this.props.currentOrganizationAction(organization)}>SHOW</a>|
                    <a href="#" onClick={()=>this.props.editOrganizationAction(organization)}>EDIT</a>|
                    <a href="#" onClick={()=>this.deleteOrganization(organization)}>REMOVE</a>
                  </td>
                </tr>

            )) }
          </tbody>
          </table>
        </form>
        </div>
        </div>
      )
    }

    return (<div className={this.props.directoryOpen
        ? "directory-open"
        : "directory-closed"}>
      <div>
        <WrappedContainer/>
      </div>
      <div id="organization-list" className="main-container">
        <div className="container">
          <form className="searchbar">
            <div className="form-group row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <input
                  type="text"
                  name="searchValue"
                  className="form-control"
                  placeholder="Search..."
                  value={this.state.searchValue}
                  onInput={this.handleChange.bind(this)}
                />
              </div>
            </div>
          </form>

        </div>
        {
          grabbedOrganizations.map(organization => (<div key={organization.id}>

            <div className="container directory-item">
              <div className="row">
                <div className="col-md-2">
                  {/* empty */}
                </div>
                <div className="col-md-8">
                  <div className="row">
                  <div className="col-md-6">
                    <button key={organization.id} type="button" className="btn btn-dark" onClick={() => this.props.currentOrganizationAction(organization)}>
                      Show
                    </button>
                  </div>
                  <div className="col-md-6">
                    <span>{organization.name}</span>
                    <span>Employees: {organization.employees}</span>

                  </div>
                </div>
                </div>
                <div className="col-md-2">
                  {/* empty */}
                </div>
              </div>
            </div>



          </div>))
        }
      </div>

    </div>)
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
    currentOrganizationAction: (organization) => {
      dispatch(actions.openCurrentOrganization(organization))
    },
    editOrganizationAction: (organization) => {
      dispatch(actions.editOrganization(organization))
    },
    fetchOrganizationsAction: () => {
      dispatch(actions.fetchOrganizations())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
