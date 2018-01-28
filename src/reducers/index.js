import actionTypes from "../actions/actionTypes";

const initialState = {
  directoryOpen: true,
  eventsOpen: false,
  newsOpen: false,
  signInOpen: false,
  signUpOpen: false,
  aboutOpen: false,
  adminSearchTermsOpen: true
}

export default function formStore(state = initialState, action) {
  switch(action.type) {
    case actionTypes.OPEN_DIRECTORY: {
    return Object.assign({}, state, { directoryOpen: true, eventsOpen: false, newsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false });
    }
    case actionTypes.OPEN_EVENTS: {
      return Object.assign({}, state, { eventsOpen: true, directoryOpen: false, newsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false });
    }
    case actionTypes.OPEN_NEWS: {
      return Object.assign({}, state, { newsOpen: true, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: false });
    }
    case actionTypes.OPEN_SIGNIN: {
      return Object.assign({}, state, { newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: true, signUpOpen: false, aboutOpen: false });
    }
    case actionTypes.OPEN_SIGNUP: {
      return Object.assign({}, state, { newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: true, aboutOpen: false });
    }
    case actionTypes.OPEN_ABOUT: {
      return Object.assign({}, state, { newsOpen: false, directoryOpen: false, eventsOpen: false, signInOpen: false, signUpOpen: false, aboutOpen: true });
    }
    default:
      return state;
  }
}
