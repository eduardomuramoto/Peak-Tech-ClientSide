import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

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

  }

  render() {
    return (
      <div className={this.props.registrationOpen ? "registration-open" : "registration-closed"}>
        <form>
          <p className="contact-header">CREATE ORGANIZATION</p>
          <hr className="rule"/>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" id="input_email" name="name" className="form-control" placeholder="Name" onChange={this.handleChange.bind(this)} value={this.state.email}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="address" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Address"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="overview" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Overview"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="employees" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Employees"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="team_size" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Team Size"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="website" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Website"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="twitter" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Twitter Handle"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="logo" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Logo Url"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.handleSubmit()}>Create</button>
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
