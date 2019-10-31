import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import FormField from 'mineral-ui/Form/FormField';
import TextInput from 'mineral-ui/TextInput';
import Button from 'mineral-ui/Button';
import Box from 'mineral-ui/Box';

const FormButton = styled(Button)({
  margin: '1em',
});

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { props, state } = this;
    props.addTodo(state.value);
    this.setState({
      value: '',
    });
  };

  handleClearComplete = (e) => {
    e.preventDefault();
    const { clearComplete } = this.props;
    clearComplete();
  };

  render() {
    const { state } = this;
    return (
      <Box as="form" onSubmit={this.handleSubmit}>
        <FormField name="task" label="Task" required>
          <TextInput onChange={this.handleChange} value={state.value} />
        </FormField>
        <FormButton primary type="submit">Add Todo</FormButton>
        <FormButton secondary type="submit" onClick={this.handleClearComplete}>Clear Completed</FormButton>
      </Box>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
};

export default TodoForm;
