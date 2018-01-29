import {Organization} from '../requests/organizations.js';
import {News} from '../requests/news.js';
import actionTypes from './actionTypes';

const asyncActions = {
  fetchOrganizations: () => {
    console.log('hihi hoho');
    return (dispatch) => {
      return Organization
        .all()
        .then(organizations=>{
          // console.log('checking action', actionTypes.SET_ORGANIZATION_LIST)
          dispatch({type: actionTypes.SET_ORGANIZATION_LIST, payload: organizations})
        })
      }
    },
  fetchNews: () => {
    return (dispatch) => {
      return News
        .all()
        .then(news => {
          dispatch({type: actionTypes.SET_NEWS_LIST, payload: news})
        })
      }
    }
}

export default asyncActions;
