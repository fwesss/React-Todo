import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <p>{task}</p>
    );
  }
}

Todo.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Todo;
