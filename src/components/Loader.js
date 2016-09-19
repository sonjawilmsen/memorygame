// src/components/Loader.js

import React from 'react'

export default (props) => {
  if ( !props.loading ) { return null }

  return (
    <div className="loader">
      <p>App is loading...</p>
    </div>
  )
}
