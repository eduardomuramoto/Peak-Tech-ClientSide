import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
import events from '../data/events';

BigCalendar.momentLocalizer(moment)

require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css');

console.log(events);
class EventCalendar extends React.Component {
  render() {
    return (
      <div>
        <BigCalendar
          style={{height: '420px'}}
          views ={['month']}
          events={events}
          startAccessor="startDate"
          endAccessor="endDate"
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendar);
