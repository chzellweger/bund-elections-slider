'use strict';

//region import React
import React from 'react';
//endregion

//region import additional libraries
import * as d3request from 'd3-request';
//endregion

//region import components
import FacebookShareIcon from './facebookShareIcon.component';
//endregion

//region import CSS
// Semantic UI
require('ta-semantic-ui/semantic/dist/components/reset.css');
require('ta-semantic-ui/semantic/dist/components/site.css');

require('ta-semantic-ui/semantic/dist/components/grid.css');
require('ta-semantic-ui/semantic/dist/components/container.css');
require('ta-semantic-ui/semantic/dist/components/icon.css');
require('ta-semantic-ui/semantic/dist/components/label.css');
require('ta-semantic-ui/semantic/dist/components/list.css');
require('ta-semantic-ui/semantic/dist/components/image.css');

// Specific CSS
require('./Masthead.scss');
//endregion


class MastheadComponent extends React.Component {

  constructor(state) {
    super(state);

    this.toggleModal = this.toggleModal.bind(this)

    this.state = {
      ...state,
      facebookShares: 0,
      commentsState: false
    };
  }


  /**
   * Called once the component has been mounted, checks the Facebook graph
   * for shares and displays them in the header.
   */
  componentDidMount() {
    if (this.props.shareUrl) {
      // Get Facebook Share Count
      d3request.json(`https://graph.facebook.com/?id=${this.props.shareUrl}`)
        .get((error, result) => {
          if (error) {
            this.setState({
              facebookShares: 0
            });
          }
          this.setState({
            facebookShares: result.share.share_count || 0,
            commentsState: false
          });
        });
    }
  }
  toggleModal() {
    this.props.toggleModal();
  }
  render() {
    // Prepare constants for the inverted version
    const invertedClass = this.props.inverted ? 'inverted' : '';
    const invertedImgSrcName = this.props.inverted ? '-inverted' : ''

    return (
      <div className={`ta-masthead masthead-component ${invertedClass}`}>
        <div className="ui container ">
          <div className="ui two column middle aligned grid">
            <div className="column ta-logo">
              <a href={`http://${this.props.mediaName}.ch`}>
                <img
                  src={`http://interaktiv.derbund.ch/ext/2016/elections-slider/images/bund_logo.svg`}
                  alt={`${this.props.mediaName} Logo`}
                  className="ui middle aligned logo image"/>
              </a></div>
            {/*region Conditional */}
            {(() => {
              // Conditionals have to be constructed using immediately called
              // functions within JSX
              if (this.props.shareUrl) {
                return (
                  <div className="right aligned column">
                    <div
                      className={`ui horizontal link list share ${invertedClass}`}>
                      <FacebookShareIcon shareUrl={this.props.shareUrl}
                                         facebookShares={this.state.facebookShares}/>
                      <a href=
                           {encodeURI(`https://twitter.com/intent/tweet?url=${this.props.shareUrl}&via=${this.props.mediaName}${this.props.twitterShareText ?
                             `&text=${this.props.twitterShareText}` : ''}`)}
                         className="twitter-share item">
                        <i className="twitter middle aligned icon"/>
                      </a>
                      {/*comment-icon*/}
                      <a href="#" className="item" onClick={this.toggleModal}>
                      <i className="comment icon"></i>
                      </a>
                      </div>
                  </div> )
              }
            })()}
            {/*endregion*/}
          </div>
        </div>
      </div> )
  }

  /**
   * Extracts the hostname of the location, and provides the default
   * mediaName if none is supplied.
   *
   * @returns {{hostname: string, mainDomain: string, mediaName: string}}
   */
  static extractMediaName() {
    let hostname = window.location.hostname;
    let mainDomain = hostname.substring(hostname.lastIndexOf('.',
        hostname.lastIndexOf('.') - 1) + 1); // extract domain name from host (crops subdomains like interaktiv.)
    let mediaName = mainDomain.split('.')[0];
    return {
      hostname: hostname,
      mainDomain: mainDomain,
      mediaName: mediaName
    }
  }


}

MastheadComponent.propTypes = {
  mediaName: React.PropTypes.string,
  shareUrl: React.PropTypes.string,
  twitterShareText: React.PropTypes.string,
  inverted: React.PropTypes.bool
};

MastheadComponent.defaultProps = {
  mediaName: MastheadComponent.extractMediaName().mediaName,
  inverted: false,
  shareUrl: (() => {
    return window.location
  })()
};


export default MastheadComponent;
