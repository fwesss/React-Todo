import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'yo',
          id: Date.now(),
          completed: false,
        },
        {
          task: 'watup',
          id: Date.now() + 1,
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todoList } = this.state;
    return (
      <>
        <TodoList todoList={todoList} />
        <TodoForm />
      </>
    );
  }
}

export default App;
