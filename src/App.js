import React from 'react';
import './App.css'
import todoData from './todoData';
import Todos from './Todos';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    // this.toggleComplete = this.toggleComplete.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
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

  addItem(e) {
    e.preventDefault();

    console.log('addItem');
  }

  render() {
    return (
      <main className="container">
        <Header toggleComplete={this.toggleComplete} addItem={this.addItem} />
        <div className="todo-list">
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem} />
        </div>
      </main>
    );
  }
}

export default App;
