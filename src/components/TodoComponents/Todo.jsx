import React from 'react';
import PropTypes from 'prop-types';
import Text from 'mineral-ui/Text';
import styled from '@emotion/styled';

const List = styled('ul')({
  listStyle: 'none',
  paddingLeft: 0,
});

class Todo extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { markComplete, todoItem } = this.props;
    markComplete(todoItem.id);
  };

  render() {
    const { todoItem } = this.props;
    return (
      <List>
        <Text
          as="li"
          appearance="h3"
          onClick={this.handleClick}
          style={todoItem.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
        >
          {todoItem.task}
        </Text>
      </List>
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
