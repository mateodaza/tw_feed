import UserActions from '../actions/user_actions'

class Profile extends React.Component {
  componentDidMount(){
    UserActions.getTweets().then((resp)=>{
      console.log("RESPONSE 1: ", resp)
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