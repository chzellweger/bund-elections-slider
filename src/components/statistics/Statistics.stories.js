import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Statistics from './Statistics';

storiesOf('Statistics', module)
  .add('Standard Statistics', () => (<Statistics projectId='test-project'/>))
  .add('Statistics with Story ID', () => <Statistics projectId='test-project' articleId='29584586'/>)
;
