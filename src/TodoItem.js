import React from 'react'

function TodoItem(props) {

  const styleCompleted = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  }

  const { id, completed, text } = props.item;

  return (
    <li className="todo-item list-group-item-action list-group-item d-flex justify-content-between align-items-center">
      <input  type="checkbox" checked={completed} onChange={() => props.toggleComplete(id)} />
      <div className="col-10" style={completed ? styleCompleted : null}> {text} </div>
      <button className= "btn btn-danger delete-button" onClick={() => props.deleteItem(id)}>X</button>

    </li>

  )
}

export default TodoItem
