// React components

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routeConfig from '../config/routes.jsx';
import MainReducer from '../redux/reducers/MainReducer';

const store = createStore(MainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>{routeConfig}</Router>
  </Provider>,
  document.getElementById('app'),
);
