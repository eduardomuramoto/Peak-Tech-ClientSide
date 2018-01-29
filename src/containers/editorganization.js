import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {Organization} from '../requests/organizations.js';

class EditOrganization extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: `${props.editOrganizationInfo.name}`,
      address: `${props.editOrganizationInfo.address}`,
      overview: `${props.editOrganizationInfo.overview}`,
      employees: `${props.editOrganizationInfo.employees}`,
      team_size: `${props.editOrganizationInfo.team_size}`,
      website: `${props.editOrganizationInfo.website}`,
      twitter: `${props.editOrganizationInfo.twitter}`,
      logo: `${props.editOrganizationInfo.logo}`
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
              <input type="text" name="name" className="form-control input_name" placeholder={this.props.editOrganizationInfo.name} onInput={this.handleChange.bind(this)} value={this.state.email}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_address" name="address" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="ADDRESS"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_overview" name="overview" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="OVERVIEW"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_employees" name="employees" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="EMPLOYEES"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="number" className="form-control input_team_size" name="team_size" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="TEAM SIZE"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_website" name="website" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="WEBSITE"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_twitter" name="twitter" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="TWITTER HANDLE"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="logo" onInput={this.handleChange.bind(this)} value={this.state.password} placeholder="LOGO URL"/>
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
