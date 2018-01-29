import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {Organization} from '../requests/organizations.js';
import {TechStack} from '../requests/tech_stacks';

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
      logo: "",
      tech_stack_ids:[],
      allTechStacks:[]
    }
  }

  componentDidMount() {
    TechStack
      .all()
      .then (res => (
        this.setState({
          name: "",
          address: "",
          overview: "",
          employees: "",
          team_size: "",
          website: "",
          twitter: "",
          logo: "",
          tech_stack_ids:[],
          allTechStacks: res
        })
      ))
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let ids = this.state.tech_stack_ids;
    const index = ids.indexOf(value);
    if (index > -1) {
      ids.splice(index, 1);
    }else {
      ids.push(value);
    }

    this.setState({
      [name]: ids
    });
  }

  handleSubmit(){
    Organization
      .create({organization: this.state})
      .then(() => {
        this.props.redirectCreateOrganizationAction();
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

          <div id="checkboxes">
            { this.state.allTechStacks.map(stack => (
              <label for={stack.id} key={stack.id}>
                <input type="checkbox" name="tech_stack_ids" id={stack.id} value={stack.id} onChange={this.handleInputChange.bind(this)} />
                {stack.name}
              </label>
            )) }
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

const mapDispatchToProps = (dispatch) => {
  return {
    redirectCreateOrganizationAction: () => { dispatch(actions.redirectCreateOrganization())},
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewOrganization);
