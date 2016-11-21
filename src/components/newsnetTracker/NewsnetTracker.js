'use strict';

import React from 'react';
import TrackingPixel from '../trackingPixel/TrackingPixel';

const NewsnetTracker = (props) => {
  if (!props.articleId) {
    return null;
  }

  return (
    <TrackingPixel
      url={`http://www.tagesanzeiger.ch/${props.articleId}/pixel.gif?nocache=${Math.random() *
      100000}`}/>
  )
};

NewsnetTracker.propTypes = {
  articleId: React.PropTypes.string.isRequired
};

export default NewsnetTracker;
