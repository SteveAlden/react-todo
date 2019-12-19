import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

// import { tsExpressionWithTypeArguments } from '@babel/types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <TextField id="standard-full-width"
                    label="What do you want to do...?"
                    style={{ margin: 8 }}
                    fullWidth
                    required
                    value={this.state.title}
                    onChange={this.onChange} />

                {/* <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab> */}

                {/* <input type="text"
                    style={{ flex: 20, padding: '5px' }}
                    name="title"
                    placeholder="What do you want to do...?"
                    value={this.state.title}
                    onChange={this.onChange}
                /> */}
                {/* <input type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: 1 }}
                /> */}
            </form>
        )
    }
}

export default AddTodo;