/* tslint:disable:no-unused-expression */

import 'mocha'
import { expect } from 'chai'
import { makeGetRequest } from '../utils'

describe('API surface', function () {
  it('Should have inform API index in server root', async function () {
    const res = await makeGetRequest({
      url: 'http://localhost:1337',
      path: '/',
      statusCodeExpected: 200
    })
    expect(res.body.events).to.equal('http://localhost:1337/api/v1/events')
  })
})