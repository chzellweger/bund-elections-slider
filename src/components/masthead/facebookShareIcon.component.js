'use strict';

//region React imports
import React from 'react';
//endregion

//region CSS imports
require('ta-semantic-ui/semantic/dist/components/icon.css');
//endregion

const FacebookShareIcon = (props) => {
  return (
    <a
      href={`https://www.facebook.com/dialog/share?href=${encodeURIComponent(props.shareUrl)}&display=popup&app_id=${props.facebookAppId}&quote=${encodeURIComponent(props.shareText)}&hashtag=${props.hashtag ? encodeURIComponent(`#${props.hashtag}`) : ''}`}
      className="fb-share item">
      {props.facebookShares >
      0 ?
        <div className="count ui mini right pointing label"
             style={{marginRight: '0.5em'}}>{props.facebookShares}</div> :
        null}
      <i className="facebook square middle aligned icon"/>
    </a>
  )
};

FacebookShareIcon.propTypes = {
  shareUrl: React.PropTypes.string,
  facebookShares: React.PropTypes.number,
  facebookAppId: React.PropTypes.string,
  shareText: React.PropTypes.string,
  hashtag: React.PropTypes.string
};

FacebookShareIcon.defaultProps = {
  shareUrl: (() => {
    return window.location
  })(),
  facebookShares: 0,
  facebookAppId: '147124108642216',
  shareText: '',
  hashtag: ''
};

export default FacebookShareIcon;
