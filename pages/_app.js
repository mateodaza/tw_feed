import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import mobxWrapper from '../lib/mobx-wrapper'

class MyApp extends App {

  render () {
    const {Component, pageProps, mobxStore} = this.props
    // It all begins here, setting global store for the app
    return (
      <Container>
        <Provider store={mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
      
    )
  }
}

export default mobxWrapper(MyApp)