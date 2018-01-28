import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
import events from '../data/events';
import axios from 'axios';

// const API_KEY = '1d4c3a545c167f21d20522433420'
let url = `https://api.meetup.com/find/upcoming_events?photo-host=public&page=10&sig_id=241913727&sig=a8cdee121cbd17d297a52b2aac85aab51075aaa8`

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
// BigCalendar.momentLocalizer(moment)

require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css');

// console.log(events);
class EventCalendar extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
    axios.get(`https://api.meetup.com/find/upcoming_events?photo-host=public&page=10&sig_id=241913727&sig=a8cdee121cbd17d297a52b2aac85aab51075aaa8`)
      .then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
      <div>
        <BigCalendar
          style={{height: '420px'}}
          views ={['month']}
          events={events}
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
