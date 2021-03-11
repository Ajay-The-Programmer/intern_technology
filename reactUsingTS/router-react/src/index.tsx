import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import cartReducer from './cartReducer/cartReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(cartReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>  

    <App />

  </Provider>,
  document.getElementById('root')
);


