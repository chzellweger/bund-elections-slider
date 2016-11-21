'use strict';

import React from 'react';
import * as d3request from 'd3-request';
import WemfTracking from '../wemftracking/WemfTracking';
import GoogleAnalytics from '../googleAnalytics/GoogleAnalytics';
import GtmTracking from '../gtmTracking/GtmTracking';
import NewsnetTracker from '../newsnetTracker/NewsnetTracker';

class Statistics extends React.Component {

  constructor(state) {
    super(state);

    this.state = {
      ...state
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rawSiteData) {
      this.extractDataAndSetState(nextProps.rawSiteData);
    }
  }

  render() {
    return (
      // Only Render something when we actually have appropriate data
      <div>
        {(this.state.wemfTrackingUrls &&
        this.state.wemfTrackingUrls.length >
        0) ?
          <WemfTracking trackingUrls={this.state.wemfTrackingUrls}/> :
          ''}
        {(this.state.gaTrackers && this.state.gaTrackers.length > 0) ?
          <GoogleAnalytics trackers={this.state.gaTrackers}/> :
          ''}
        {this.state.gtmId ? <GtmTracking gtmId={this.state.gtmId}/> : ''}
        {this.props.articleId ?
          <NewsnetTracker articleId={this.props.articleId}/> :
          ''}
      </div>
    )
  }

  /**
   * Called once, after the initial rendering. Since we only try and request the
   * Site Data object now, we have to make sure that the render() method
   * won't render anything without having the required properties of it's
   * children elements.
   */
  componentDidMount() {

    // Raw Site Data has not been provided, start our own request to get it.
    if (!this.props.rawSiteData) {
      let hostname = window.location.hostname;

      // to avoid a error message on localhost
      if (hostname == 'localhost') {
        hostname = 'www.tagesanzeiger.ch';
        //return;
      }

      hostname =
        hostname.substring(hostname.lastIndexOf('.',
            hostname.lastIndexOf('.') - 1) + 1); // extract domain name from host
                                                 // (crops subdomains like
                                                 // interaktiv.)

      d3request.json('http://www.' + hostname + '/api/sites/default')
        .get((error, siteData) => {
          if (error) {
            console.log(error);
          }

          this.extractDataAndSetState(siteData);
        });
    } else {
      // We have been provided by the raw Site Data object, we just have to
      // parse it and get the data out
      this.extractDataAndSetState(this.props.rawSiteData)
    }
  }

  extractDataAndSetState(siteData) {
    let urlList = [];

    siteData.site.statistics.map((stat) => {
      urlList.push(`${stat.desktop_url}interactive/${this.props.projectId}`)
    });

    this.setState({
      gaTrackers: siteData.site.google_analytics_information.trackers,
      gtmId: siteData.site.gtm_id,
      wemfTrackingUrls: urlList
    })
  }


}

Statistics.propTypes = {
  projectId: React.PropTypes.string,
  rawSiteData: React.PropTypes.object,
  articleId: React.PropTypes.string
};

Statistics.defaultProps = {
  projectId: 'default-project'
};

export default Statistics;
