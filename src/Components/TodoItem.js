import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';





export class TodoItem extends Component {
    getStyle = () => {
        return {
            //background: 'f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }




    render() {
        const { id, title } = this.props.todo;
        return (
                <ListItem role={undefined} dense button style={this.getStyle()}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            onChange={this.props.markComplete.bind(this, id)}
                        />
                    </ListItemIcon>
                    <ListItemText primary={title}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={this.props.delTodo.bind(this, id)} >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>


        )
    }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    padding: '5px 9px',
    float: 'right'
}


export default TodoItem;
