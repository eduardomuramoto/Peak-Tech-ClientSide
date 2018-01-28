import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import EventCalendar from './eventcalendar.js';

class Events extends React.Component {

  render() {
    return (
      <div className={this.props.eventsOpen ? "events-open" : "events-closed"}>
        <h1>Events</h1>
        <EventCalendar />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    eventsOpen: state.eventsOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
