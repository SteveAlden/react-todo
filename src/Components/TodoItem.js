import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

export class TodoItem extends Component {
  state = {
    transform: 'scale(1.0)',
    hoverCardBg: '#E1E5EE',
    color: '#84c9fb'
  };

  onMouseOver = () => {
    this.setState({
      transform: 'scale(1.01)',
      hoverCardBg: 'rgba(132.0, 201.0, 251.0, 0.2)'
    });
  };
  onMouseOut = () => {
    this.setState({
      transform: 'scale(1.0)',
      hoverCardBg: '#E1E5EE'
    });
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      color: 'rgba(132.0, 201.0, 251.0, 1.0)',
      boxShadow: '6px 6px 12px #bfc3ca, -6px -6px 12px #ffffff',
      borderRadius: '7px',
      transition: 'transform .2s',
      transform: this.state.transform,
      background: this.state.hoverCardBg
    };
  };

  getStyleIcon = () => {
    return {
      color: 'rgba(132.0, 201.0, 251.0, 1.0)',
      boxShadow: '4px 4px 8px #bfc3ca, -4px -4px 8px #ffffff',
      margin: '2px 0px 2px 0px',
      padding: '10px'
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <ListItem
        role={undefined}
        dense
        button
        style={this.getStyle()}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <ListItemIcon>
          <Checkbox
            edge='start'
            color='default'
            onChange={this.props.markComplete.bind(this, id)}
            style={this.getStyleIcon()}
          />
        </ListItemIcon>

        <ListItemText
          disableTypography
          primary={<Typography>{title}</Typography>}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={this.props.delTodo.bind(this, id)}
            style={this.getStyleIcon()}
          >
            <DeleteIcon color='secondary' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  padding: '5px 9px',
  float: 'right'
};

export default TodoItem;
