import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GoogleLoginButton from '../dist/googleLoginButton';
import readme from '../README.md';

storiesOf('Google Login Button', module)
.add(
    'demo',
    // withNotes(readme)(
    () => (
        <div style={{padding: '1em'}}>
            <GoogleLoginButton
                clientId={process.env.STORYBOOK_GOOGLE_CLIENT_ID || '-'}
                callback={action('google login response callback')}
            />
        </div>
    )
    // )
)
.add(
    'Read Me',
    () => <div dangerouslySetInnerHTML={{__html: readme}} />
)
;
