import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import FeedbackMessage from './FeedbackMessage.component';

storiesOf('Feedback Message', module)
  .add('Normal Feedback Message', () =>(<FeedbackMessage/>))
  .add('Inverted Feedback Message', () =>(<FeedbackMessage additionalClasses={['inverted']}/>))
  .add('Coloured Message with other contact', () => <FeedbackMessage additionalClasses={['inverted', 'purple']} contact='kaspar.manz@tagesanzeiger.ch'/>)
;
