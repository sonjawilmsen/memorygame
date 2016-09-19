import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/appLoading'

class Loader extends Component {
  render() {
    const { loading } = this.props

    if ( !loading ) { return null }

    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps, {})(Loader)

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

// import ReactDOM from 'react-dom';
import App from './App';

// Wrap your entire app in React Redux's <Provider> component and pass in the
// created store.
render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
