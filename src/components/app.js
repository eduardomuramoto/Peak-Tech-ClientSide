
import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import Directory from '../containers/directory.js';
import UserNavBar from '../containers/usernavbar';
import Events from '../containers/events.js';
import Footer from '../containers/footer.js';


class App extends Component {

  render() {
    return (
      <div>
        <UserNavBar />
        <Directory />
        <Events />
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
