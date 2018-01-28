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
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    TechStack
      .all()
      .then (res => (
        this.setState({allTechStacks: res})
      ))
  }

  handleSubmit(newTechInfo){
    TechStack
      .create(newTechInfo)
      const {topStack} = this.state
      this.setState({
        allTechStacks: [...topStack]
      })
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      newTechStack: {name: event.target.value}
    });
    this.setState(newState);
    // console.log(this.state);
  }

  deleteTechStack(stackId) {
    const filteredStacks = this.state.allTechStacks.filter()
    const newState = Object.assign({}, this.state.allTechStacks, {
      allTechStacks: filteredStacks
    });
    this.setState(newState);
  }
  //
  // deleteTechStack(stackId) {
  // TechStack
  //   .destroy (stackId)
  //   .then(res)
  //   // .then (res => (
  //   //   this.setState({allTechStacks: allTechStacks.filter(stack => stack.id !== stackId)})
  //   // ))
  // }

  render() {
    // console.log(this.state.allTechStacks)
    return (
      <div className={this.props.adminTechnologiesOpen ? "admintechnologies-open" : "admintechnologies-closed"}>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="input_name" name="name" onChange={this.handleChange.bind(this)} value={this.state.newTechStack.name}  placeholder="Name"></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.handleSubmit(this.state.newTechStack)}>SUBMIT</button>
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
                  // onClick={this.deleteTechStack(stack.id)}
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
