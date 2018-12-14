import Button from '../shared/button'
import Router from 'next/router'

class Landing extends React.Component {

  authorize=()=> {
    Router.push('/oauth_request')
  }

  render() {
    return (
      <div>
        <Button title='login!' action={this.authorize} />
        <style jsx>{`
          
        `}</style>
      </div>
    );
  }
}

export default Landing
