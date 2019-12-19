import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
// import './App.css';

class Todos extends Component {


    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <List>
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
            </List>

        ));
    }
}


Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
