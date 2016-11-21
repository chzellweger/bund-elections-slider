'use strict';

import React from 'react';
import TrackingPixel from '../trackingPixel/TrackingPixel';

const WemfTracking = (props) => {
    let pixels = [];

    props.trackingUrls.map((url) => {
      pixels.push(<TrackingPixel
        url={`${url}?r=${encodeURIComponent(document.referrer)}&d=${Date.now()}`}
        key={url}/>);
    });

    return (
      <span>{pixels}</span>
    )

};

WemfTracking.propTypes = {
  trackingUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

WemfTracking.defaultProps = {
};

export default WemfTracking;
