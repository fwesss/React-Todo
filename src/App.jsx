import React, { StrictMode } from 'react';
import { Flex } from 'mineral-ui';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Search from './components/TodoComponents/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('todoList')) {
      this.setState({
        todoList: JSON.parse(localStorage.getItem('todoList')),
      });
    }
  }

  componentDidUpdate() {
    const { todoList } = this.state;
    localStorage.setItem('todoList', JSON.stringify(todoList));
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
          queried: true,
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

  search = (query) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.map((todoItem) => {
        if (todoItem.task.includes(query)) {
          return {
            ...todoItem,
            queried: true,
          };
        }
        return {
          ...todoItem,
          queried: false,
        };
      }),
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <StrictMode>
        <Flex direction="column" alignItems="center">
          <h1>Todo List</h1>
          <Search search={this.search} />
          <TodoList todoList={todoList} markComplete={this.markComplete} />
          <TodoForm addTodo={this.addTodo} clearComplete={this.clearComplete} />
        </Flex>
      </StrictMode>
    );
  }
}

export default App;
