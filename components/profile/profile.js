import Router from 'next/router'
import Loading from '../shared/loading'
import Button from '../shared/button'
import UserActions from '../../actions/user_actions'
import Tweet from 'react-tweet'

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
    this.refresh = this.refresh.bind(this)
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

  async refresh(){
    let tweets, error = null
    this.setState({loading: true})
    await UserActions.getTweets().then((resp)=>{
      if(resp.status < 300){
        tweets = resp.data.tweets
      }else {
        error = resp.data.error
      }
    })
    this.setState({error, tweets, loading: false})
  }

  logout=()=> {
    this.setState({loading: true})
    UserActions.logout().then((resp)=>{
      this.setState({loading: false})
      Router.push('/')
    })
  }

  goHome=()=> {
    this.setState({loading: true})
    Router.push('/')
  }

  render() {
    const { error, loading, profile, tweets, done } = this.state
    const linkProps = {target: '_blank', rel: 'noreferrer'}
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
            <div className='profile-content'>
              <img src={profile.photos[0].value}/>
              <h4>Hello {profile.displayName}</h4>
              <h6>These are your last 100 tweets!</h6>
              <div className='tweets-feed'>
              {
                tweets.length > 0 ? (
                  tweets.map((tweet)=>{
                    return <Tweet data={tweet} linkProps={linkProps} />
                  })
                ):(
                  <h3>No Tweets </h3>
                )
              }
              </div>
              <div className='buttons'>
                <Button title='refresh' type='button1' action={this.refresh}/>
                <Button title='logout' type='button2' action={this.logout}/>
              </div>
            </div>
          )
        }
        <style jsx>{`
          .tweets-feed {
            justify-content: center;
            overflow: auto;
            max-height: 27vh;
            width: 100%;
            padding: 5% 0 0 8%;
          }
          .buttons {
            width: 100%;
            padding: 2% 0 0 0;
            display: flex;
            flex-direction: row;
            justify-content: center
          }
          .profile-content{
            padding: 5% 0 2% 0;
          }
          @media screen and (max-width: 1200px) {
            .tweets-feed {
              padding: 0 0 0 15%;
            }
          }
          @media screen and (max-width: 600px) {
            .tweets-feed {
              padding: 0;
              width: 100vw;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Profile;