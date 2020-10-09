import React from 'react'

class AddTodoItem extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.state.title ?
      this.props.addTodo(this.state.title) :
      console.log('Must write something')

    this.setState({ title: '' })
  }

  grabInputValue = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group row">
          <input
            className="form-control col-sm-8"
            placeholder="Enter task"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.grabInputValue}
          />
          <button type="submit" className="col-sm-4 btn-primary">Submit</button>
        </div>
      </form>

    )
  }
}

export default AddTodoItem