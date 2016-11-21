'use strict';

import React from 'react';
class GoogleAnalytics extends React.Component {

  constructor(state) {
    super(state);

    this.state = {
      ... state
    }
  }

  componentDidMount() {
    // Since the component did mount, we can change the DOM -> add the Google
    // Tracking code
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


    this.props.trackers.map((tracker) => {
      // When creating more than one tracker, each tracker needs to be
      // given its own name, otherwise just one tracker will be created
      ga('create', tracker.id, 'auto', tracker.name);
      // When a tracker sends a command, it will have to send the
      // command prefixed with the tracker name, so it will work correctly.
      ga(`${tracker.name}.send`, 'pageview');
    });
  }

  render() {
    return null;
  }

}

GoogleAnalytics.propTypes = {
  trackers: React.PropTypes.array.isRequired
};

GoogleAnalytics.defaultProps = {
  trackers: []
};

export default GoogleAnalytics;
