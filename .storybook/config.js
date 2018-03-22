import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
    // require('../src/googleLoginButton/stories/googleLoginButton.story');
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
