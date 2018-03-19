import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk'



import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer,
  applyMiddleware(reduxThunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.querySelector('#app')
);