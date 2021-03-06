import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import Directory from '../containers/directory.js';
import UserNavBar from '../containers/usernavbar';
import Events from '../containers/events.js';
import Footer from '../containers/footer.js';
import News from '../containers/news.js';
import About from '../containers/about.js';
import SignIn from '../containers/signin.js';
import SignUp from '../containers/signup.js';
import AdminSearchTerms from '../containers/adminsearchterms.js';
import AdminTechStacks from '../containers/admintechstacks.js';
import NewOrganization from '../containers/neworganization.js';
import AdminMeetUpId from '../containers/adminmeetupid';
import AdminUsers from '../containers/adminusers.js';
import CurrentOrganization from '../containers/currentorganization.js';
import EditOrganization from '../containers/editorganization.js';


class App extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <Directory />
        <AdminSearchTerms />
        <AdminTechStacks />
        <AdminMeetUpId />
        <AdminUsers />
        <EditOrganization />
        <CurrentOrganization />
        <Events />
        <News />
        <About />
        <SignIn />
        <SignUp />
        <NewOrganization />
        <Footer />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen,
    eventsOpen: state.eventsOpen,
    newsOpen: state.newsOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
