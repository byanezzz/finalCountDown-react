import React from 'react';
import PropTypes from 'prop-types'

class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }
   onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  } 

  render() {
    return <form onSubmit={ this.onSubmit }>
      <label htmlFor="searchInput">Search a repository</label>
      <input type="text" className="six.columns" name="Search"
        placeholder="react, rails, webpack..." onChange={ this.onChange }
        id="searchInput" defaultValue={ this.props.search }/>
      <p className="align-center"><input className="button-primary" type="submit" value="Search"/></p>
    </form>;
  }
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
}
export default SearchForm;