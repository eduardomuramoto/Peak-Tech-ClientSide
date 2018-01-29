import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import {TechStack} from '../requests/tech_stacks';

class AdminTechStacks extends React.Component {
  constructor () {
    super();

    this.state = {
      newTechStack: {
        name: ""
      },
      allTechStacks: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    TechStack
      .all()
      .then (res => (
        this.setState({
          newTechStack: {
            name: ""
          },
          allTechStacks: res
        })
      ))
  }

  handleSubmit(newTechInfo){
    const newStack = this.state.allTechStacks.slice(0);
    TechStack
      .create(newTechInfo)
      .then(res => {newStack.unshift({id: res.id, name: res.name})
        this.setState(Object.assign({}, this.state, {allTechStacks: newStack, newTechStack: {name: ""}}));
    })
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      newTechStack: {name: event.target.value}
    });
    this.setState(newState);
  }

  deleteTechStack(stackId) {
    const filteredStacks = this.state.allTechStacks.filter(stack => stack.id !== stackId)
    const newState = Object.assign({}, this.state.allTechStacks, {
      allTechStacks: filteredStacks
    });
    this.setState(newState);
    TechStack
      .destroy(stackId)
  }

  render() {
    return (
      <div className={this.props.adminTechnologiesOpen ? "admintechnologies-open" : "admintechnologies-closed"}>
        <div className="container">
          <form className="admin-form">
            <h4 className="admin-title-header">TECHNOLOGIES</h4>
            <div className="form-group row">
              <div className="col-sm-3 add-tag">
                <p>NAME</p>
              </div>
              <div className="col-sm-7">
                <input type="text" className="form-control input_name" name="name" onChange={this.handleChange.bind(this)} value={this.state.newTechStack.name}></input>
              </div>
              <div className="col-sm-2 button-column">
                <button type="button" className="form-submit" onClick={()=>this.handleSubmit(this.state.newTechStack)}>ADD</button>
              </div>
            </div>

            <div className="admin-snippet">
              <p>LIST OF TECHNOLOGIES TO BE USED WITH ORGANIZATIONS</p>
            </div>


        <div className="container-fluid">
        <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr className="admin-table-row">
              <th scope="col-md-12" className="admin-table-head">TECH STACK</th>
              <th scope="col-md-12" className="admin-table-head">ACTION</th>
            </tr>
          </thead>
          <tbody>

            { this.state.allTechStacks.map(stack => (
            <tr key={stack.id} className="admin-add-row">
              <th scope="row" className="admin-data">{stack.name}</th>
              <td className="admin-data-remove">
                <button
                  onClick={()=>this.deleteTechStack(stack.id)}
                  >REMOVE
                </button>
              </td>

            </tr>
            )) }
          </tbody>
        </table>
          </div>
        </div>
      </form>
      </div>
    </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    adminTechnologiesOpen: state.adminTechnologiesOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminTechStacks);
