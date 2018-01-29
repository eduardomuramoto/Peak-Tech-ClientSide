import {Organization} from '../requests/organizations.js';
import actionTypes from './actionTypes';

const asyncActions = {
  fetchOrganizations: () => {
    return (dispatch) => {
      return Organization
        .all()
        .then(organizations=>{
          console.log('checking action', actionTypes.SET_ORGANIZATION_LIST)
          dispatch({type: actionTypes.SET_ORGANIZATION_LIST, payload: organizations})
        })}
      }
}

export default asyncActions;
