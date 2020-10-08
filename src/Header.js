import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  grabInputValue = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.title);
  }

  render() {
    // const { item } = this.props
    return (
      <header>
        <h1>Todo app</h1>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Enter task" type="text" name="title" value={this.props.item} onChange={this.grabInputValue} />
          <button type="submit">Submit</button>
        </form>
      </header>
    )
  }
}

export default Header