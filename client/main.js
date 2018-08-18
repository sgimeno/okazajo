import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'

export default function main() {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>,
    document.getElementById('root')
  )
}
