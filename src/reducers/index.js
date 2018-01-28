import actionTypes from "../actions/actionTypes";
import jwtDecode from 'jwt-decode';



const initialState = {
  user:localStorage.getItem('jwt')?jwtDecode(localStorage.getItem('jwt')).full_name : null,
  directoryOpen: true,
  eventsOpen: false,
  newsOpen: false,
  signInOpen: false,
  signUpOpen: false,
  aboutOpen: false,
  loggedIn: false,
  adminSearchTermsOpen: false,
  registrationOpen: false,
  adminTechStacksOpen: false,
  admin: localStorage.getItem('jwt')?jwtDecode(localStorage.getItem('jwt')).is_admin : false,
  adminEventsOpen: false,
  adminNewsOpen: false,
  adminUsersOpen: false,
  adminTechnologiesOpen: false,
  currentOrganizationOpen: false,
  currentOrganizationInfo: {}
}
export default function formStore(state = initialState, action) {
  switch(action.type) {
    case actionTypes.OPEN_DIRECTORY: {
    return Object.assign({}, state, { directoryOpen: true, currentOrganizationOpen: false, eventsOpen: false, newsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_EVENTS: {
      return Object.assign({}, state, { eventsOpen: true, currentOrganizationOpen: false, directoryOpen: false, newsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_NEWS: {
      return Object.assign({}, state, { newsOpen: true, currentOrganizationOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_SIGNIN: {
      return Object.assign({}, state, { newsOpen: false, currentOrganizationOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: true, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_SIGNUP: {
      return Object.assign({}, state, { newsOpen: false, currentOrganizationOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: true, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_ABOUT: {
      return Object.assign({}, state, { newsOpen: false, currentOrganizationOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: true, registrationOpen: false });
    }
    case actionTypes.OPEN_REGISTRATION: {
      return Object.assign({}, state, { newsOpen: false, currentOrganizationOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: true });
    }
    case actionTypes.CREATE_TOKEN: {
      return Object.assign({}, state, { admin: action.payload, currentOrganizationOpen: false, newsOpen: false, directoryOpen: true, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false, loggedIn: true });
    }
    case actionTypes.CREATE_USER: {
      return Object.assign({}, state, { user:action.payload });
    }
    case actionTypes.OPEN_ADMIN_EVENTS: {
      return Object.assign({}, state, { adminEventsOpen: true, adminUsersOpen: false, adminTechnologiesOpen: false, adminNewsOpen: false, newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_ADMIN_NEWS: {
      return Object.assign({}, state, { adminNewsOpen: true, adminUsersOpen: false, adminTechnologiesOpen: false, adminEventsOpen: false, newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_ADMIN_TECHNOLOGIES: {
      return Object.assign({}, state, { adminTechnologiesOpen: true, adminUsersOpen: false, adminNewsOpen: false, adminEventsOpen: false, newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_ADMIN_USERS: {
      return Object.assign({}, state, { adminUsersOpen: true, adminTechnologiesOpen: false, adminNewsOpen: false, adminEventsOpen: false, newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.OPEN_CURRENT_ORGANIZATION: {
      return Object.assign({}, state, { currentOrganizationInfo: action.payload, currentOrganizationOpen: true, adminUsersOpen: true, adminTechnologiesOpen: false, adminNewsOpen: false, adminEventsOpen: false, newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    default:
      return state;
  }
}
