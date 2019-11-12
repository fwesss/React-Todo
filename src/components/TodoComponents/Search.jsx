import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'mineral-ui/Form/FormField';
import TextInput from 'mineral-ui/TextInput';
import IconSearch from 'mineral-ui-icons/IconSearch';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.props;
    const { value } = this.state;

    if (prevState.value !== value) {
      search(value);
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    const searchIcon = <IconSearch />;

    return (
      <FormField
        name="search"
        label="Search"
        hideLabel
        value={value}
        input={TextInput}
        onChange={this.handleChange}
        iconEnd={searchIcon}
      />
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
