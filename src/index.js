import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './app';
import { loadAsign } from './actionCreators';
import { Router, Route, browserHistory } from 'react-router';

store.dispatch(loadAsign({url:"/petroleo.json",type:"Load_asignaturas"}))
render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
        </Route>
      </Router>
    </Provider>
    , document.getElementById('container')
);
