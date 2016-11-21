import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Masthead from './MastheadComponent';

storiesOf('Masthead', module)
  .add('Tagesanzeiger', () => (
    <Masthead mediaName="tagesanzeiger"/>
  ))
  .add('Tagesanzeiger mit Links', () => (
    <Masthead mediaName="tagesanzeiger"
              shareUrl="http://newsletter.tagesanzeiger.ch"/>
  ))
  .add('Tagesanzeiger mit ungültigem Link (0 Shares)', () => (
    <Masthead mediaName="tagesanzeiger"
              shareUrl="http://tagesanzeiger.ch/ungueltig"/>
  ))
  .add('Tagesanzeiger mit Spot-The-Ball-Link', () => (
    <Masthead
      shareUrl="http://interaktiv.tagesanzeiger.ch/2016/spot-the-ball/"/>
  ))
  .add('Der Bund', () => (
    <Masthead mediaName="derbund"/>
  ))
  .add('Der Bund mit Twittertext', () => (
    <Masthead mediaName="derbund" shareUrl="http://newsletter.derbund.ch"
              twitterShareText="Abonnieren Sie unseren neuen Newsletter!"/>
  ))
  .add('BaZ Online', () => (
    <Masthead mediaName="bazonline"/>
  ))
  .add('Default', () => (
    <Masthead />
  ))
  .add('Invertiert', () => (
    <Masthead shareUrl="http://newsletter.derbund.ch" inverted />
  ))
  .add('Invertiert, Tagi', () => (
    <Masthead shareUrl="http://newsletter.derbund.ch" mediaName="tagesanzeiger" inverted />
  ))
  .add('SonntagsZeitung', () => (<Masthead mediaName="sonntagszeitung" />))
;
