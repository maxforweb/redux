import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Pixa from './pixabay';
import allReducers from '../reducers/index';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Pixa/> 
      </Router>
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('fieldToShow')
);
