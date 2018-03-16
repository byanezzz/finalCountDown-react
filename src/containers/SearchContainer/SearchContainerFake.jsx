import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { startSearch, successSearch } from '../../actions/actions';
import SearchForm from '../../components/SearchForm';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onSubmit = value => {
    this.props.dispatch(startSearch(value));
    fetch(`https://api.github.com/search/repositories?q=${ value }`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.props.dispatch(successSearch(res.items));
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return <section>
      <SearchForm onSubmit={ this.onSubmit } search={ this.props.search } />
      <RepositoryList data={ this.props.results } total={ this.props.results.length }
        loading={ this.props.loading } search={ this.props.search }
        queried={ this.props.queried } />
    </section>
  }
}

const mapStateToProps = state => {
  let { search, loading, results, queried } = state;
  return { search, loading, results, queried };
}
SearchContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
  queried: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(SearchContainer);