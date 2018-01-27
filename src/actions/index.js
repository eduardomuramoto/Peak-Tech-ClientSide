import actionTypes from "./actionTypes";

const actions = {
  openDirectory: () => {
    return { type: actionTypes.OPEN_DIRECTORY, payload: undefined }
  },
  openEvents: () => {
    return { type: actionTypes.OPEN_EVENTS, payload: undefined }
  },
  openNews: () => {
    return { type: actionTypes.OPEN_NEWS, payload: undefined }
  },
  openSignIn: () => {
    return { type: actionTypes.OPEN_SIGNIN, payload: undefined}
  },
  openSignUp: () => {
    return { type: actionTypes.OPEN_SIGNUP, payload: undefined}
  },
  openAbout: () => {
    return { type: actionTypes.OPEN_ABOUT, payload: undefined}
  }
};

export default actions;
