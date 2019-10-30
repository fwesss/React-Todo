import React, { StrictMode } from 'react';
import { Grommet } from 'grommet';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  addTodo = (task) => {
    const { todoList } = this.state;
    this.setState({
      todoList: [
        ...todoList,
        {
          task,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <StrictMode>
        <Grommet>
          <TodoList todoList={todoList} />
          <TodoForm addTodo={this.addTodo} />
        </Grommet>
      </StrictMode>
    );
  }
}

export default App;
