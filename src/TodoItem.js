// import { render } from '@testing-library/react';
import React from 'react'

function TodoItem(props) {

  const styleCompleted = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  }
  const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const { id, completed, text } = props.item;

  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => props.toggleComplete(id)} />
      <p style={completed ? styleCompleted : null}> {text} </p>
      <button className="delete-button" style={btnStyle} onClick={() => props.deleteItem(id)}>X</button>
    </div>
  )

}



export default TodoItem
