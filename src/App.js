import React, { Component } from 'react';
import Header from './Components/layout/Header'
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

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

      <div>
        <Header />

        <Container maxWidth="smx">
          <Paper style={{
            margin: "20px 2px 20px 2px",
            padding: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}>
            <AddTodo addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo} />
          </Paper>
        </Container>



      </div>

    );
  }

}

export default App;
