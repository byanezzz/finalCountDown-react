import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchForm/SearchBar';
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

 /*  handleTermChange = (term) => {
    
    let gifiTerm = term.replace(/\s/g,"+");
    /* console.log(wikiTerm);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${gifiTerm}&api_key=dc6zaTOxFJmzC`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      setThisState(data);   
    })
    .catch((error) => {
      console.log('Hubo un problema con la operación: ' + error.message);
    })
  }
  setThisState (data) {
    this.setState({ gifs: data.data })
  } */

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='WikiSearch'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Header />
              <SearchBar onTermChange={term => this.handleTermChange(term)}/>
              {/* <SearchForm></SearchForm> */}
              {/* <SearchContainer></SearchContainer> */}
            </Col>
            <Col xs={12} md={6}>
            <MemeList gifs={this.state.gifs} />
              {/* <ContentContainer></ContentContainer> */}
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      );
  };
};

export default App;