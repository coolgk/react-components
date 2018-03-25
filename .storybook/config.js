import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

import fontawesome from '@fortawesome/fontawesome';
import * as faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
fontawesome.library.add(faGoogle);

import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.story\.jsx?$/);

function loadStories() {
    // require('../src/googleLoginButton/stories/googleLoginButton.story');
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
