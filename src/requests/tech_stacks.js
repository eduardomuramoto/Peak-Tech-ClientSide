import {BASE_URL} from './config_request';

function  getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`
}
// HTTP REQUESTS


export const TechStack = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/tech`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  },
  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/meet_up_id`,
      {
        method: 'POST',
        headers: {
          'Authorization': getJwt(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },
  destroy (id) {
    return fetch(
      `${BASE_URL}/api/v1/meet_up_id/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  }
}
