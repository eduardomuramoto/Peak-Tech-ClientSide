import actionTypes from "../actions/actionTypes";

const initialState = {
  directoryOpen: true,
  eventsOpen: false,
  newsOpen: false
}

export default function formStore(state = initialState, action) {
  switch(action.type) {
    case actionTypes.OPEN_DIRECTORY: {
    return Object.assign({}, state, { directoryOpen: true, eventsOpen: false, newsOpen: false });
    }
    case actionTypes.OPEN_EVENTS: {
      return Object.assign({}, state, { eventsOpen: true, directoryOpen: false, newsOpen: false });
    }
    case actionTypes.OPEN_NEWS: {
      return Object.assign({}, state, { newsOpen: true, directoryOpen: false, eventsOpen: false });
    }
    default:
      return state;
  }
}
