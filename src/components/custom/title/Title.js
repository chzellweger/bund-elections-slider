require('ta-semantic-ui/semantic/dist/components/reset.css');
require('ta-semantic-ui/semantic/dist/components/site.css');
require('ta-semantic-ui/semantic/dist/components/container.css');
require('ta-semantic-ui/semantic/dist/components/segment.css');
//require('styles/App.css');
require('./Title.scss')

import React from 'react';

function Title (props) {
  return (
    <div>

    <h1 className="ui header custom-title">{props.title}</h1>
    <div className="ui grid">
                 
                 <div className="computer tablet only row">
                     <div className="three wide column"></div>
                     <div className="left aligned ten wide column">
                            <div className="custom-text">{props.lead}</div>
                            <br />
                            <div className="custom-text"><i>{props.authors}</i></div>
                     </div>
                     <div className="three wide column"></div>
                 </div>
                 
                 <div className="mobile only row">
                     <div className="two wide column"></div>
                     <div className="left aligned twelve wide column">
                            <div className="custom-text">{props.lead}</div>
                            <br />
                            <div className="custom-text"><i>{props.authors}</i></div>
                     </div>
                     <div className="two wide column"></div>
                 </div>
               
    </div>

    </div>
    )
}

Title.defaultProps = {};

export default Title;
