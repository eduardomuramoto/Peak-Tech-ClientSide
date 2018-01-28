import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import TechStack from '../requests/tech_stacks';

class AdminTechStacks extends React.Component {
  constructor () {
    super();

    this.state = {
      newTechStack: {
        name: ""
      }
    };
  }

  // handleSubmit(){
  //   TechStack
  //     .create({name: this.state.newTechStack})
  //     console.log({name: this.state.newTechStack})
  // }
  //
  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }
  //
  // deleteTechStack(stackId) {
  //   TechStack
  //     .destroy (stackId)
  // }

  render() {
    const test = TechStack.all();
    console.log(test);
    return (
      <div className={this.props.adminTechStacksOpen ? "admintechstacks-open" : "admintechstacks-closed"}>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="input_name" name="name" onChange={this.handleChange.bind(this)} value={this.state.name}  placeholder="Name"></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.handleSubmit()}>SUBMIT</button>
            </div>
          </div>
        </form>
        <table>
          {/* <tbody>
            <tr><th>Tech Stack</th><th>Action</th></tr>
            { stacks.map(stack => (
            <tr>
              <td>{stack.name}</td>
              <td>
                <button
                  onClick={this.deleteTechStack(stack.id)}
                  >Delete
                </button>
              </td>
            </tr>
            )) }
          </tbody> */}
        </table>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    adminTechStacksOpen: state.adminTechStacksOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminTechStacks);
