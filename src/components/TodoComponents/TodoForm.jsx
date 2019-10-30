import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormField, TextInput,
} from 'grommet';

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

  render() {
    const { state } = this;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField name="task" label="Task">
          <TextInput onChange={this.handleChange} value={state.value} required />
        </FormField>
        <Button type="submit" primary label="Add Todo" />
      </Form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
