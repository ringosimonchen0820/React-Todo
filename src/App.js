import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';

// const toDo = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  /* 
  TODO constructor() {
    TODO super();
    TODO this.state = {
      TODO TodoList: toDo
    TODO };
  TODO }
  */

  render() {
    return (
      <div className ="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
