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
      // console.log({name: this.state.meet_up})
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
      <div className={this.props.adminEventsOpen ? "adminevents-open" : "adminevents-closed"}>
        <div className="container">
          <form className='admin-form'>

            <h4 className="admin-title-header">EVENTS</h4>
            <div className="form-group row">
              <div className="col-sm-3 add-tag">
                <p>MEETUP ID</p>
              </div>
              <div className="col-sm-7">
                <input type="text" className="form-control input_name" name="name" onInput={this.handleChange.bind(this)} value={this.state.name}  placeholder="NAME"/>
              </div>
              <div className="col-sm-2 button-column">
                <button type="button" className="form-submit" onClick={()=>this.handleSubmit()}>ADD</button>
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
                  <tr>
                    <th scope="row" className="admin-data">Vancouver Tech</th>
                    <td className="admin-data-remove">remove</td>

                  </tr>
                  <tr>
                    <th scope="row" className="admin-data">vancouver-ruby</th>
                    <td className="admin-data-remove">remove</td>

                  </tr>

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


export default connect(mapStateToProps, mapDispatchToProps)(AdminMeetUpId);



{/* <table>
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
</table> */}
