import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import CopyrightNotice from './CopyrightNotice.component';

storiesOf('Copyright Notice', module)
  .add('Default', ()=>(<CopyrightNotice/>))
  .add('Bund', ()=> <CopyrightNotice year="2014" mediaName="derbund"/>)
  .add('Tagesanzeiger Invertiert', ()=> <CopyrightNotice inverted mediaName='tagesanzeiger'/>)
;
