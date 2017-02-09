'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import {createStore} from 'redux';

import App from './js/components/App.component';
import combinedReducers from './js/reducers/combinedReducers';

import './sass/styles.sass';

const store = createStore(combinedReducers);

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('container')
);
