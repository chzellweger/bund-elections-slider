'use strict';

import React from 'react';

const TrackingPixel = (props) => {
  return (
    <img
      src={props.url}
      style={{position: 'absolute', visibility: 'hidden'}}
      width="1"
      height="1"
    />
  )
};

TrackingPixel.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default TrackingPixel;
