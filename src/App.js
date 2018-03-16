import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import MemeList from './components/MemeList/Index';
import request from 'superagent';
/* import SearchContainer from './containers/SearchContainer/SearchContainer'; */

class App extends Component {

  constructor() {
    super();
    this.state = {
        gifs: []
    }
    this.handleTermChange = this.handleTermChange.bind(this);
}

handleTermChange = (term) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

  request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
  });
};

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar className="appbar" title='The Final Countdown'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <Header />
              <SearchBar onTermChange={term => this.handleTermChange(term)}/>
            </Col>
            <Col xs={12} md={9}>
              <MemeList gifs={this.state.gifs} />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      );
  };
};

export default App;