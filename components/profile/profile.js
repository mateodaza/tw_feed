import Router from 'next/router'
import Loading from '../shared/loading'
import Button from '../shared/button'
import UserActions from '../../actions/user_actions'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      done: false,
      profile: null,
      tweets: null,
      loading: true,
      error: null
    }
  }

  async componentDidMount(){
    let profile, tweets, error = null
    await UserActions.getProfile().then((resp)=>{
      console.log("RESPONSE 1: ", resp)
      if(resp.status < 300){
        profile = resp.data.profile
      }else{
        error = resp.data.error
      }
    })
    await UserActions.getTweets().then((resp)=>{
      console.log("RESPONSE 2: ", resp)
      if(resp.status < 300){
        tweets = resp.data.tweets
      }else {
        error = resp.data.error
      }
    })
    this.setState({profile, tweets, error, loading: false, done: true})

  }

  refresh=()=> {
    this.setState({loading: true})
    UserActions.getProfile().then((resp)=>{
      console.log("RESPONSE 1: ", resp)
      this.setState({loading: false})
    })
  }

  logout=()=> {
    this.setState({loading: true})
    UserActions.getTweets().then((resp)=>{
      console.log("RESPONSE 2: ", resp)
      this.setState({loading: false})
      Router.push('/')
    })
  }

  goHome=()=> {
    this.setState({loading: true})
    Router.push('/')
  }

  render() {
    let error = this.state.error
    let loading = this.state.loading
    let done = this.state.done
    if(!done){
      return <Loading show={loading} />
    }
    return (
      <div>
        <Loading show={loading} />
        {
          error ? (
            <div>
              <h3>error: {error}</h3>
              <Button title='go home' type='button2' action={this.goHome}/>
            </div>
          ):(
            <div>
              <h1>John Doe</h1>
              <Button title='refresh' type='button1' action={this.refresh}/>
              <Button title='logout' type='button2' action={this.logout}/>
            </div>
          )
        }

      </div>
    );
  }
}

export default Profile;