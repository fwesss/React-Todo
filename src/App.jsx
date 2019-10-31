import React, { StrictMode } from 'react';
import { Flex } from 'mineral-ui';

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

  markComplete = (id) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            completed: !todoItem.completed,
          };
        }
        return todoItem;
      }),
    });
  };

  clearComplete = () => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((todoItem) => !todoItem.completed),
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <StrictMode>
        <Flex direction="column" alignItems="center">
          <TodoList todoList={todoList} markComplete={this.markComplete} />
          <TodoForm addTodo={this.addTodo} clearComplete={this.clearComplete} />
        </Flex>
      </StrictMode>
    );
  }
}

export default App;
