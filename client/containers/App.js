import React from 'react'
import SearchInput from '../components/SearchInput'
import Table from '../components/Table'
import Sidenav from '../components/Sidenav'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
    this.query = this.query.bind(this)
  }
  mockQuery () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    })
  }
  query (qs) {
    console.log('Querying with q=', qs);
    this.mockQuery().then(() => {
      const now = new Date().toISOString().split('T')[0]
      this.setState({
        events: [
          { id: 1, name: 'HFMN concert', startDate: now, endDate: now, category: 'MUSIC/ALTERNATIVE' },
          { id: 2, name: 'Helena Hauff session', startDate: now, endDate: now, category: 'MUSIC/ELECTRONIC' },
          { id: 3, name: 'Judith Butler talk', startDate: now, endDate: now, category: 'PHILOSOPHY/FEMINISM' }
        ]
      })
    })
  }
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Okazajo</h1>
          <SearchInput onSubmit={this.query}/>
          {(this.state.events.length > 0) && <Table rows={this.state.events} />}
        </div>
      </section>
    )
  }
}
