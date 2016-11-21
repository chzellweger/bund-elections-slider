import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/masthead/Masthead.stories');
  require('../src/components/statistics/Statistics.stories');
  require('../src/components/feedbackMessage/FeedbackMessage.stories');
  require('../src/components/standaloneShareButtons/StandaloneShareButtons.stories');
  require('../src/components/copyrightNotice/CopyrightNotice.stories');
  // require as many stories as you need.
}

configure(loadStories, module);
