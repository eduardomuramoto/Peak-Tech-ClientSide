import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
import {Event} from '../requests/events'
// import events from '../data/events';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
// BigCalendar.momentLocalizer(moment)

require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css');

class EventCalendar extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    Event
      .all()
      .then(res => (
        this.setState({
          events: res
        })
      ))
  }

  // function popUp() {
  //
  // }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <BigCalendar
          style={{
            height: '420px',
            minWidth:"600px"
          }}
          views ={['month']}
          events={this.state.events}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendar);
