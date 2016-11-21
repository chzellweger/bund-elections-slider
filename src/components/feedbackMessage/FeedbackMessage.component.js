'use strict';

import React from 'react';

require('ta-semantic-ui/semantic/dist/components/icon.css');
require('ta-semantic-ui/semantic/dist/components/message.css');

const FeedbackMessage = (props) => {
  return (
    <div className={`ui icon ${props.additionalClasses.join(' ')} message`}><i className="comments icon" />
      <div className="content">
        <div className="header"> Haben Sie Anmerkungen oder einen Fehler entdeckt?
        </div>
        <p>Wir freuen uns über Ihre <a
          href={`mailto:${props.contact}`}>Nachricht</a>.
        </p>
      </div>
    </div>
  )
};

FeedbackMessage.propTypes = {
  additionalClasses: React.PropTypes.arrayOf(React.PropTypes.string),
  contact: React.PropTypes.string
};

FeedbackMessage.defaultProps = {
  contact: 'christian.zellweger@derbund.ch',
  additionalClasses: []
};

export default FeedbackMessage;
