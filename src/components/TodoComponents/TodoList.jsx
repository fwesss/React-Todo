import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { todoList } = this.props;
    return (
      todoList.length > 0 ? (
        todoList.map((todoItem) => (
          <Todo key={todoItem.id} task={todoItem.task} />
        ))) : <p>No tasks</p>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string,
      id: PropTypes.date,
      completed: PropTypes.bool,
    }),
  ).isRequired,
};

export default TodoList;
