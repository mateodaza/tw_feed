import Button from '../shared/button'
import Router from 'next/router'

class Landing extends React.Component {

  componentDidMount(){
    Router.push('/connect')
  }

  render() {
    return (
      <div>
        <Button title='login!' action=''/>
        <style jsx>{`
          
        `}</style>
      </div>
    );
  }
}

export default Landing
