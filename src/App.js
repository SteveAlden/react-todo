import React, { Component } from 'react';
import Header from './Components/layout/Header'
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';
import Container from '@material-ui/core/Container';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Play with space time',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Manipulate space time',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Mess with space time',
        completed: false
      }
    ]
  }

  //Toggle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Container>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </Container>

    );
  }

}

export default App;
