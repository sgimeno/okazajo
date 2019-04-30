import React from 'react'

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.state.value && this.props.onSubmit(this.state.value)
  }
  render () {
    return (
      <form className='content' onSubmit={this.handleSubmit}>
        <div className='field has-addons'>
          <p className='control'>
            <input className='input' type='text' value={this.state.value} onChange={this.handleChange}/>
          </p>
          <p className='control'>
            <button className='button'>
              Search
            </button>
          </p>
        </div>
      </form>
    )
  }
}
