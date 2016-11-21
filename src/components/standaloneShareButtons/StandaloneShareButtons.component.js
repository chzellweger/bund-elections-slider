'use strict';

import React from 'react';

//region CSS
require('ta-semantic-ui/semantic/dist/components/icon.css');
require('ta-semantic-ui/semantic/dist/components/button.css');
//endregion

const StandaloneShareButtons = (props) => {
  return (
    <div className="ui vertical labeled icon buttons">
      <a
        href={`https://www.facebook.com/dialog/share?href=${encodeURIComponent(props.shareUrl)}&display=popup&app_id=${props.facebookAppId}&quote=${encodeURIComponent(props.shareText)}&hashtag=${props.hashtag ? encodeURIComponent(`#${props.hashtag}`) : ''}`}
        className="ui facebook button fb-share" target="_blank">
        <i className="facebook icon" target="_blank" />
        Auf Facebook teilen
      </a>
      <a
        href={`http://twitter.com/intent/tweet?text=${encodeURIComponent(props.shareText)}&url=${encodeURIComponent(props.shareUrl)}&via=${encodeURIComponent(props.twitterVia)}&hashtags=${props.hashtag}`}
        className="ui twitter button twitter-share" target="_blank">
        <i className="twitter icon " target="_blank" />
        Auf Twitter teilen</a>
    </div>
  )
};

StandaloneShareButtons.propTypes = {
  shareUrl: React.PropTypes.string,
  shareText: React.PropTypes.string,
  twitterVia: React.PropTypes.string,
  facebookAppId: React.PropTypes.string,
  hashtag: React.PropTypes.string,
};

StandaloneShareButtons.defaultProps = {
  shareUrl: (() => {
    return window.location
  })(),
  facebookAppId: '147124108642216',
  shareText: '',
  twitterVia: 'tagesanzeiger',
  hashtag: ''
};

export default StandaloneShareButtons;
