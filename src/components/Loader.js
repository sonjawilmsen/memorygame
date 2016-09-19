// src/components/Loader.js

import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  inner: {
    textAlign: 'center',
    padding: '30% 0',
    width: 500,
    margin: '30% auto',
  }
}

export default (props) => {
  const { loading } = props

  if ( !loading ) { return null }

  return (
    <div className="loader" style={ style.wrapper }>
      <div style={ style.inner }>
        <CircularProgress />
        <p>Loading...</p>
      </div>
    </div>
  )
}
