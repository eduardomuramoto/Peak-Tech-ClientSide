import {BASE_URL} from './config_request';

function  getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`
}
// HTTP REQUESTS


export const Event = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/events`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  }
}
