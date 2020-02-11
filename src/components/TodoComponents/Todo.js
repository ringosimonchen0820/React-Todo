import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleTask(props.list.id)}
            className={`uncompleted ${props.list.completed ? ' completed' : ''}`}
        >
            <p> {props.list.task} </p>
            <p> {props.list.completed} </p>
        </div>
    );
}

export default Todo;