import React from 'react';
import PropTypes from 'prop-types';
import Text from 'mineral-ui/Text';

class Todo extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { markComplete, todoItem } = this.props;
    markComplete(todoItem.id);
  };

  render() {
    const { todoItem } = this.props;
    return (
      <Text
        onClick={this.handleClick}
        style={todoItem.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
      >
        {todoItem.task}
      </Text>
    );
  }
}

Todo.propTypes = {
  todoItem: PropTypes.shape({
    task: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  }).isRequired,
  markComplete: PropTypes.func.isRequired,
};

export default Todo;
