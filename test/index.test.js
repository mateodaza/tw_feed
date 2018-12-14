/* global describe, it */
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect.js'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Twitter Feed" in layout title', () => {
    const app = shallow(<App />)

    expect(app.find('h1').text()).to.equal('Twitter Feed')
  })
})