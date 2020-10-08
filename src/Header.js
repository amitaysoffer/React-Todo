import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    // const {  }
    return (
      <header>
        <h1>Todo app</h1>
        <form onSubmit={this.props.addItem}>
          <input placeholder="Enter task" type="text" onChange={this.props.handleChange} name="item" value={this.props.item} />
          <button type="submit" >Submit</button>
        </form>
      </header>
    )
  }
}

export default Header