import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

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
      <label htmlFor="searchInput">Ready to search?</label>
      <input type="text" name="Search"
        placeholder="Search anything. Really, anything." onChange={ this.onChange }
        id="searchInput" defaultValue={ this.props.search }/>
      <RaisedButton label="Search!" secondary={true} type="submit" />
      {/* <input className="button-primary"  value="Search"/> */}
    </form>;
  }
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
}
export default SearchForm;