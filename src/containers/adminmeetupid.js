import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import {MeetUp} from '../requests/meetup_ids';

class AdminMeetUp extends React.Component {
  constructor () {
    super();

    this.state = {
      newId: {
        name: ""
      },
      allIds: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    MeetUp
      .all()
      .then (res => (
        this.setState({
          newId: {
            name: ""
          },
          allIds: res
        })
      ))
  }

  handleSubmit(newMeetUpID){
    const newIds = this.state.allIds.slice(0);
    MeetUp
      .create(newMeetUpID)
      .then(res => {newIds.push({id: res.id, name: res.name})
        this.setState(Object.assign({}, this.state, {allIds: newIds}));
    })
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      newId: {name: event.target.value}
    });
    this.setState(newState);
  }

  deleteId(groupId) {
    const filteredIds = this.state.allIds.filter(group => group.id !== groupId)
    const newState = Object.assign({}, this.state.allIds, {
      allIds: filteredIds
    });
    this.setState(newState);
    MeetUp
      .destroy(groupId)
  }

  render() {
    return (
      <div className={this.props.adminEventsOpen ? "adminevents-open" : "adminevents-closed"}>
        <div className="container">
          <form className="admin-form">
            <h4 className="admin-title-header">EVENTS</h4>
            <div className="form-group row">
              <div className="col-sm-3 add-tag">
                <p>NAME</p>
              </div>
              <div className="col-sm-7">
                <input type="text" className="form-control input_name" name="name" onChange={this.handleChange.bind(this)} value={this.state.newId.name}></input>
              </div>
              <div className="col-sm-2 button-column">
                <button type="button" className="form-submit" onClick={()=>this.handleSubmit(this.state.newId)}>ADD</button>
              </div>
            </div>




        <div className="container-fluid">
        <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr className="admin-table-row">
              <th scope="col-md-12" className="admin-table-head">MEETUP ID</th>
              <th scope="col-md-12" className="admin-table-head">ACTION</th>
            </tr>
          </thead>
          <tbody>

            { this.state.allIds.map(group => (
            <tr key={group.id}>
              <th scope="row" className="admin-data">{group.name}</th>
              <td className="admin-data-remove">
                <button
                  onClick={()=>this.deleteId(group.id)}
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
    adminEventsOpen: state.adminEventsOpen,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminMeetUp);
