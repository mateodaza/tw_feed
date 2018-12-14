import Layout from '../components/shared/layout'
import Landing from '../components/landing/landing'
import Loading from '../components/shared/loading'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false
    }
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