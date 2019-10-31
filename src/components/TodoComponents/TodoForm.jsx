import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'mineral-ui/Form/FormField';
import TextInput from 'mineral-ui/TextInput';
import Button from 'mineral-ui/Button';

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
      <form onSubmit={this.handleSubmit}>
        <FormField name="task" label="Task" required>
          <TextInput onChange={this.handleChange} value={state.value} />
        </FormField>
        <Button primary type="submit">Add Todo</Button>
        <Button secondary type="submit" onClick={this.handleClearComplete}>Clear Completed</Button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
