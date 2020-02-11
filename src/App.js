import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: toDo
    };
  }
  
  addNewTask = typedInTask => {
    const newTodo = {
      task: typedInTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  }

  clearCompletedTodos = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewTask={this.addNewTask} />
        </div>
        <TodoList
          todo={this.state.todoList}
        />
        <button onClick={this.clearCompletedTodos}> Finished All Tasks </button>
      </div>
    );
  }
}

export default App;
