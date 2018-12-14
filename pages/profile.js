import ProfileView from '../components/profile/profile'
import Layout from '../components/shared/layout'
import Loading from '../components/shared/loading'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: true
    }
  }
  componentDidMount() {
    this.setState({loading: false})
  }

  render() {
    return (
      <Layout>
        <Loading show={this.state.loading} />
        <ProfileView />
      </Layout>
    );
  }
}

export default Profile;