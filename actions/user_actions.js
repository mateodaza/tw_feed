import axios from 'axios'

function getTweets() {
  let url = `/tweets`
  return axios({
    url: url,
    method: 'get'
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

function getProfile() {
  let url = `/connect`
  return axios({
    url: url,
    method: 'post'
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

function logout() {
  let url = `/disconnect`
  return axios({
    url: url,
    method: 'post'
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

const userActions = {
  getTweets,
  getProfile,
  logout
};

export default userActions;