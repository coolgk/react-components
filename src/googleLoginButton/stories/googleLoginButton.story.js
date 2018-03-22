import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GoogleLoginButton from '../dist/googleLoginButton';

storiesOf('Google Login Button', module)
.add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
));
