import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    // class property to handle search bar state changes
    handleChanges = event => {
        //* update state with each keystroke
        this.setState({
            newTodo: event.target.value
        });
        console.log(event.target.value);
    }

    // class property to submit form
    handleSubmit = event => {
        event.preventDefault();
        //? this.setState({ newTodo: '' });
    }

    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='newTodo'
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
            </form>
        );
    }
}

export default TodoForm;
