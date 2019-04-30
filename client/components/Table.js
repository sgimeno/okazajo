import React from 'react'
import TableRow from './TableRow'

export default class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const keys = Object.keys(this.props.rows[0])
    return (
      <table className='table'>
        <thead>
          {keys.map((k, i) => <th key={i}>{k}</th>)}
        </thead>
        <tbody>
          {this.props.rows.map((r, i) => <TableRow item={r} key={i} />)}
        </tbody>
      </table>
    )
  }
}
