import Layout from '../components/shared/layout'
import Landing from '../components/landing/landing'
import Loading from '../components/shared/loading'

class Home extends React.Component {
  // Each file in pages folder is a route for the app, this is default for landing /
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
        <Landing />
      </Layout>
    );
  }
}

export default Home;