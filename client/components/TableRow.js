import React from 'react'

export default class TableRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const columns = Object.keys(this.props.item).map((k, i) => {
      return <td key={i}>{this.props.item[k]}</td>
    })    
    return (
      <tr>{columns}</tr>
    )
  }
}
