import React from 'react';
import todoData from './todoData';
import Todos from './Todos';
import AddTodoItem from './AddTodoItem';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  toggleComplete = (id) => {
    const updatedItems = this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    })
    this.setState({
      todos: updatedItems
    })
  }

  deleteItem = (id) => {
    this.setState({ todos: this.state.todos.filter(item => item.id !== id) })
  }

  addTodo = (text) => {
    const newItem =
    {
      id: Math.random(),
      text: text,
      completed: false
    }
    const updatedTodos = this.state.todos.concat(newItem);
    this.setState({ todos: updatedTodos })
    
  }

  render() {
    return (
      <main className="container">
        <Header />
        <AddTodoItem
          toggleComplete={this.toggleComplete}
          addTodo={this.addTodo}
        />
        <ul className="todo-list list-group row">
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteItem={this.deleteItem}
          />
        </ul>
      </main>
    );
  }
}

export default App;
