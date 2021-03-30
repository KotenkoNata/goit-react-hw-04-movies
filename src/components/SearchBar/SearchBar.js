import React, { Component } from 'react';
// import { InputGroup, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = { query: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = event => {
    const { value: query } = event.currentTarget;
    this.setState({ query });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    query && onSubmit && onSubmit(query);

    this.reset();
  };

  reset = () => {
    this.setState(() => ({ query: '' }));
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <button type='submit'>
          <span>Search</span>
        </button>

        <input
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
