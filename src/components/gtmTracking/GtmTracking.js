'use strict';

import React from 'react';

class GtmTracking extends React.Component {

  constructor(state) {
    super(state);

    this.state = {
      ... state,
    }
  }

  componentDidMount() {

        //region Code Snippet from Google
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push(
            {
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            }
          );
          var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !=
          'dataLayer' ?
          '&l=' +
          l :
            '';
          j.async = true;
          j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);

        })(window, document, 'script', 'dataLayer', this.props.gtmId);
        //endregion
  }

  render() {

    if (this.props.gtmId === '') {
      return null;
    }

    return (
      <iframe src={`//www.googletagmanager.com/ns.html?id=${this.props.gtmId}`}
              height='0' width='0'
              style={{display: 'none', visibility: 'hidden'}}></iframe>
    );
  }

}

GtmTracking.propTypes = {
  gtmId: React.PropTypes.string.isRequired
};

GtmTracking.defaultProps = {};

export default GtmTracking;
