import Button from '../shared/button'
import Router from 'next/router'
import Loading from '../shared/loading'

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      loading: false
    }
  }
  

  authorize=()=> {
    this.setState({loading: true})
    Router.push('/oauth_request')
  }

  render() {
    return (
      <div>
        <Loading show={this.state.loading} />
        <Button title='start!' action={this.authorize} type='button1'/>
        <style jsx>{`

        `}</style>
      </div>
    );
  }
}

export default Landing
