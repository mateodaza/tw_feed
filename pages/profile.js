import UserActions from '../actions/user_actions'

class Profile extends React.Component {
  componentDidMount(){
    UserActions.getProfile().then((resp)=>{
      console.log("RESPONSE 1: ", resp)
    })
    UserActions.getTweets().then((resp)=>{
      console.log("RESPONSE 2: ", resp)
    })
  }

  render() {
    return (
      <div>
        <h3>HAI</h3>
      </div>
    );
  }
}

export default Profile;