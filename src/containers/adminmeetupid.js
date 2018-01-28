import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import MeetUpId from '../requests/meetup_ids';

class AdminMeetUpId extends React.Component {
  constructor () {
    super();

    this.state = {
      meet_up: {
        name: ""
      }
    };
  }

  handleSubmit(){
    MeetUpId
      .create({name: this.state.meet_up})
      console.log({name: this.state.meet_up})
  }

  deleteMeetUp(id){
    MeetUpId
      .destroy(id)
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }

  render() {
    // const terms = Mee.all();

    return (
      <div className={this.props.AdminMeetUpIdsOpen ? "adminsearchterms-open" : "adminsearchterms-closed"}>
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="input_name" name="name" onImput={this.handleChange.bind(this)} value={this.state.name}  placeholder="Name"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.handleSubmit()}>SUBMIT</button>
            </div>
          </div>
        </form>
        <table>
          <tr><th>Meetup ID</th><th>Action</th></tr>
          { terms.map(term => (
            <tr>
              <td>{term.name}</td>
              <td>
                <button
                    onClick={this.deleteMeetUp(term.id)}
                  >Delete
                </button>
              </td>
            </tr>
            ))
          }
        </table>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    AdminMeetUpIdsOpen: state.AdminMeetUpIdsOpen,
  }
};

const mapDispatchToProps = (state) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminMeetUpId);
