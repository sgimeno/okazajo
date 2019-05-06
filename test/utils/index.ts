import * as request from 'supertest'

function makeGetRequest (options: {
  url: string,
  path?: string,
  query?: any,
  token?: string,
  statusCodeExpected?: number,
  contentType?: string,
  range?: string
}) {
  if (!options.statusCodeExpected) options.statusCodeExpected = 400
  if (options.contentType === undefined) options.contentType = 'application/json'

  const req = request(options.url).get(options.path)

  if (options.contentType) req.set('Accept', options.contentType)
  if (options.token) req.set('Authorization', 'Bearer ' + options.token)
  if (options.query) req.query(options.query)
  if (options.range) req.set('Range', options.range)

  return req.expect(options.statusCodeExpected)
}

// ---------------------------------------------------------------------------

export {
  makeGetRequest
}
