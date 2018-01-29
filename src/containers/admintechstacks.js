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
      .then(res => {newStack.push({id: res.id, name: res.name})
        this.setState(Object.assign({}, this.state, {allTechStacks: newStack}));
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
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control input_name" name="name" onChange={this.handleChange.bind(this)} value={this.state.newTechStack.name}  placeholder="Name"></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" className="form-submit" onClick={()=>this.handleSubmit(this.state.newTechStack)}>SUBMIT</button>
            </div>
          </div>
        </form>
        <table>
          <tbody>
            <tr><th>Tech Stack</th><th>Action</th></tr>
            { this.state.allTechStacks.map(stack => (
            <tr key={stack.id}>
              <td>{stack.name}</td>
              <td>
                <button
                  onClick={()=>this.deleteTechStack(stack.id)}
                  >Delete
                </button>
              </td>
            </tr>
            )) }
          </tbody>
        </table>
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
