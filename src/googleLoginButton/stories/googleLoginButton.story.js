import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GoogleLoginButton from '../dist/googleLoginButton';

storiesOf('Google Login Button', module)
.add('example', () => (
    <div style={{padding: '1em'}}>
        <GoogleLoginButton clientId={process.env.GOOGLE_CLIENT_ID || 'abc'} callback={action('callback')} />
    </div>
));
