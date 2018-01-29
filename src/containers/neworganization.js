import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {Organization} from '../requests/organizations.js';

class NewOrganization extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      address: "",
      overview: "",
      employees: "",
      team_size: "",
      website: "",
      twitter: "",
      logo: ""
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
      .create({organization: this.state})
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className={this.props.registrationOpen ? "registration-open" : "registration-closed"}>
        <form>
          <p className="contact-header">CREATE ORGANIZATION</p>
          <hr className="rule"/>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" name="name" className="form-control input_name" placeholder="NAME" onInput={this.handleChange.bind(this)} value={this.state.email}/>
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
              <button type="button" className="form-submit" onClick={()=>this.handleSubmit()}>CREATE</button>
            </div>
          </div>
          </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    registrationOpen: state.registrationOpen
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewOrganization);
