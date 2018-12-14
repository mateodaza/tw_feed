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

const userActions = {
  getTweets
};

export default userActions;