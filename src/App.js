// src/App.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import appLoading from './actions/app-loading'
import Loader from './components/Loader'

class App extends Component {
  toggleLoading() {
    const { loading, appLoading } = this.props
    appLoading(!loading)
  }

  render() {
    const { loading } = this.props

    return (
      <div className="main">
        <Loader loading={ loading } />
        <h1>Memory Game</h1>
        <button onClick={this.toggleLoading.bind(this)}>
          Toggle Loading!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { appLoading })(App)
