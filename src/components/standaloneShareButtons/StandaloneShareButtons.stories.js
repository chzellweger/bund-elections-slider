import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import StandaloneShareButtons from './StandaloneShareButtons.component';

storiesOf('Standalone Share Buttons', module)
  .add('Default', ()=> (<StandaloneShareButtons/>))
  .add('With Share Text', ()=>(<StandaloneShareButtons shareText='Dies ist ein kleiner Text, der auch geteilt wird.'/>))
  .add('With Hashtag', ()=>(<StandaloneShareButtons hashtag='webdev'/>))
;
