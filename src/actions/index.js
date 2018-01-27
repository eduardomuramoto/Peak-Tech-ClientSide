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
  }
};

export default actions;
