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
  },
  openRegistration: () => {
    return { type: actionTypes.OPEN_REGISTRATION, payload: undefined}
  },
  createToken: (admin) => {
    return { type: actionTypes.CREATE_TOKEN, payload: admin }
  },
  createUser: (user) => {
    return { type: actionTypes.CREATE_USER, payload: user }
  },
  openAdminEvents: () => {
    return { type: actionTypes.OPEN_ADMIN_EVENTS, payload: undefined}
  },
  openAdminNews: () => {
    return { type: actionTypes.OPEN_ADMIN_NEWS, payload: undefined}
  },
  openAdminTechnologies: () => {
    return { type: actionTypes.OPEN_ADMIN_TECHNOLOGIES, payload: undefined}
  },
  openAdminUsers: () => {
    return { type: actionTypes.OPEN_ADMIN_USERS, payload: undefined}
  },
  openCurrentOrganization: (organization) => {
    return { type: actionTypes.OPEN_CURRENT_ORGANIZATION, payload: organization}
  },
  signOut: () => {
    return { type: actionTypes.SIGN_OUT, payload: undefined}
  },
  signUp: () => {
    return { type: actionTypes.SIGN_UP, payload: undefined}
  },
  editOrganization: (organization) => {
    return { type: actionTypes.EDIT_ORGANIZATION, payload: organization}
  }
};

export default actions;
