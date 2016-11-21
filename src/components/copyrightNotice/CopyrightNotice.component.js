'use strict';

import React from 'react';

require('ta-semantic-ui/semantic/dist/components/image.css');
require('./CopyrightNotice.scss');

const CopyrightNotice = (props) => {
  return (
    <a href={`http://www.${props.mediaName}.ch/`} className={`CopyrightNotice ${props.inverted ? 'inverted' : ''}`}>
      <img src={`http://interaktiv.tagesanzeiger.ch/static/icons/${props.mediaName}${props.inverted ? '-inverted' : ''}.svg`} alt="" className="ui mini middle aligned right spaced image"/>
      <small>&copy; {props.year} {props.fullName}</small>
    </a>
  )
};

CopyrightNotice.propTypes = {
  mediaName: React.PropTypes.string,
  year: React.PropTypes.number,
  inverted: React.PropTypes.bool,
  fullName: React.PropTypes.string,
};

CopyrightNotice.defaultProps = {
  mediaName: 'derbund',
  year: (() => {return new Date(Date.now()).getFullYear()})(),
  inverted: false,
  fullName: 'Der Bund'
};

export default CopyrightNotice;
