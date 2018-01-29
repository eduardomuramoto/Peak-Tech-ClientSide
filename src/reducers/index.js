import actionTypes from "../actions/actionTypes";
import jwtDecode from 'jwt-decode';

const initialState = localStorage.getItem('jwt')?{
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
  currentOrganizationInfo: {},
  postSignUpMessage: false
}:{
  user:localStorage.getItem('jwt')?jwtDecode(localStorage.getItem('jwt')).full_name : null,
  directoryOpen: false,
  eventsOpen: false,
  newsOpen: false,
  signInOpen: true,
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
  currentOrganizationInfo: {},
  postSignUpMessage: false
}
const stateOpen = {
  directoryOpen: false,
  eventsOpen: false,
  newsOpen: false,
  signInOpen: false,
  signUpOpen: false,
  aboutOpen: false,
  adminSearchTermsOpen: false,
  registrationOpen: false,
  adminTechStacksOpen: false,
  adminEventsOpen: false,
  adminNewsOpen: false,
  adminUsersOpen: false,
  adminTechnologiesOpen: false,
  currentOrganizationOpen: false,
  postSignUpMessage: false,
}

export default function formStore(state = initialState, action) {
  switch(action.type) {
    case actionTypes.OPEN_DIRECTORY: {
    return Object.assign({}, state, localStorage.getItem('jwt')?Object.assign({}, stateOpen, {directoryOpen: true}):initialState);
    }
    case actionTypes.OPEN_EVENTS: {
      return Object.assign({}, state, localStorage.getItem('jwt')?Object.assign({}, stateOpen, {eventsOpen: true}):initialState);
    }
    case actionTypes.OPEN_NEWS: {
      return Object.assign({}, state, localStorage.getItem('jwt')?Object.assign({}, stateOpen, {newsOpen: true}):initialState);
    }
    case actionTypes.OPEN_SIGNIN: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {signInOpen: true}));
    }
    case actionTypes.OPEN_SIGNUP: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {signUpOpen: true}));
    }
    case actionTypes.OPEN_ABOUT: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {aboutOpen: true}));
    }
    case actionTypes.OPEN_REGISTRATION: {
      return Object.assign({}, state, localStorage.getItem('jwt')?Object.assign({}, stateOpen, {registrationOpen: true}):initialState);
    }
    case actionTypes.CREATE_TOKEN: {
      return Object.assign({}, state, { admin: action.payload, currentOrganizationOpen: false, newsOpen: false, directoryOpen: true, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false, loggedIn: true });
    }
    case actionTypes.CREATE_USER: {
      return Object.assign({}, state, { user:action.payload });
    }
    case actionTypes.OPEN_ADMIN_EVENTS: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {adminEventsOpen: true}));
    }
    case actionTypes.OPEN_ADMIN_NEWS: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {adminNewsOpen: true}));
    }
    case actionTypes.OPEN_ADMIN_TECHNOLOGIES: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {adminTechnologiesOpen: true}));
    }
    case actionTypes.OPEN_ADMIN_USERS: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {adminUsersOpen: true}));
    }
    case actionTypes.OPEN_CURRENT_ORGANIZATION: {
      return Object.assign({}, state, { currentOrganizationInfo: action.payload, currentOrganizationOpen: true, adminUsersOpen: false, adminTechnologiesOpen: false, adminNewsOpen: false, adminEventsOpen: false, newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false });
    }
    case actionTypes.SIGN_OUT: {
      return Object.assign({}, state, { currentOrganizationInfo: {}, postSignUpMessage: false, currentOrganizationOpen: false, adminUsersOpen: false, adminTechnologiesOpen: false, adminNewsOpen: false, adminEventsOpen: false, newsOpen: false, directoryOpen: true, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false, registrationOpen: false, loggedIn: false });
    }
    case actionTypes.SIGN_UP: {
      return Object.assign({}, state, Object.assign({}, stateOpen, {signUpOpen: false, signInOpen: true, postSignUpMessage: true}));
    }
    default:
      return state;
  }
}
