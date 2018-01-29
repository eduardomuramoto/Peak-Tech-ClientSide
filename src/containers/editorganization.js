import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {Organization} from '../requests/organizations.js';

class EditOrganization extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.editOrganizationInfo.name,
      address: props.editOrganizationInfo.address,
      overview: props.editOrganizationInfo.overview,
      employees: props.editOrganizationInfo.employees,
      team_size: props.editOrganizationInfo.team_size,
      website: props.editOrganizationInfo.website,
      twitter: props.editOrganizationInfo.twitter,
      logo: props.editOrganizationInfo.logo
    }
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }

  handleSubmit(){
    Organization
      .update(this.props.editOrganizationInfo.id, this.state)
      .then(() => this.props.fetchOrganizationsAction())
      this.props.openDirectoryAction();
  }

  render() {
    return (
      <div className={this.props.editOrganizationOpen ? "editorganization-open" : "editorganization-closed"}>
        <form>
          <p className="contact-header">EDIT {this.props.editOrganizationInfo.name}</p>
          <hr className="rule"/>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                name="name"
                className="form-control input_name"
                placeholder={
                  this.props.editOrganizationInfo.name
                    ? `${this.props.editOrganizationInfo.name}`
                    : "NAME"
                }
                onInput={this.handleChange.bind(this)}
                value={this.state.name}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control input_address"
                name="address"
                onInput={this.handleChange.bind(this)}
                value={this.state.address}
                placeholder={this.props.editOrganizationInfo.address ? this.props.editOrganizationInfo.address : "ADDRESS" }/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control input_overview"
                name="overview"
                onInput={this.handleChange.bind(this)}
                value={this.state.overview}
                placeholder={this.props.editOrganizationInfo.overview ? this.props.editOrganizationInfo.overview : "OVERVIEW"}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control input_employees"
                name="employees"
                onInput={this.handleChange.bind(this)}
                value={this.state.employees}
                placeholder={this.props.editOrganizationInfo.employees ? this.props.editOrganizationInfo.employees : "EMPLOYEES"}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control input_team_size"
                name="team_size"
                onInput={this.handleChange.bind(this)}
                value={this.state.team_size}
                placeholder={this.props.editOrganizationInfo.team_size ? this.props.editOrganizationInfo.team_size : "TEAM SIZE"}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control input_website"
                name="website"
                onInput={this.handleChange.bind(this)}
                value={this.state.website}
                placeholder={this.props.editOrganizationInfo.website ? this.props.editOrganizationInfo.website : "WEBSITE"}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control input_twitter"
                name="twitter"
                onInput={this.handleChange.bind(this)}
                value={this.state.twitter}
                placeholder={this.props.editOrganizationInfo.twitter ? this.props.editOrganizationInfo.twitter : "TWITTER"}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                name="logo"
                onInput={this.handleChange.bind(this)}
                value={this.state.logo}
                placeholder={this.props.editOrganizationInfo.logo ? this.props.editOrganizationInfo.logo : "LOGO URL"}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" className="form-submit" onClick={()=>this.handleSubmit()}>UPDATE</button>
            </div>
          </div>
          </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    editOrganizationOpen: state.editOrganizationOpen,
    editOrganizationInfo: state.editOrganizationInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDirectoryAction: () => { dispatch(actions.openDirectory())},
    fetchOrganizationsAction: () => { dispatch(actions.fetchOrganizations())}
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditOrganization);
