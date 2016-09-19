import React from 'react';
import { render } from 'react-dom';

// Import the necessary libraries to set up Redux and React Redux to set up
// convenient bindings with React.
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Get all the app's reducers in one big object.
import * as reducers from './reducers';
const reducer = combineReducers(reducers);

// Use the Redux devToolsExtension to visualize the Redux Store.
const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;
const enhancer = compose(
  devTools
);

// Create the Redux Store with all the combined reducers, and the middleware
// from the enhancer.
const store = createStore(reducer, enhancer);

import App from './App';

// Wrap your entire app in React Redux's <Provider> component and pass in the
// created store.
render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
