import React from 'react';
import PropTypes from 'prop-types';
import Text from 'mineral-ui/Text';

import Todo from './Todo';

const TodoList = ({ todoList, markComplete }) => (
  todoList.length > 0 ? (
    todoList
      .filter((todoItem) => (
        todoItem.queried === true
      ))
      .map((queriedItem) => (
        <Todo
          key={queriedItem.id}
          todoItem={queriedItem}
          markComplete={markComplete}
        />
      ))) : <Text as="p" appearance="h3">No tasks</Text>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string,
      id: PropTypes.number,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  markComplete: PropTypes.func.isRequired,
};

export default TodoList;
