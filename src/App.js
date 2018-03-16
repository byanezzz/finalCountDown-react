import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import './App.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
/* import SearchContainer from './containers/SearchContainer/SearchContainer'; */


class App extends Component {
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
              <SearchForm></SearchForm>
              {/* <SearchContainer></SearchContainer> */}
            </Col>
            <Col xs={12} md={6}>
              {/* <ContentContainer></ContentContainer> */}
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      );
  };
};

export default App;
