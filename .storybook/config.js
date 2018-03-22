import { configure } from '@storybook/react';

function loadStories() {
  require('../src/googleLoginButton/stories/googleLoginButton.story');
}

configure(loadStories, module);
