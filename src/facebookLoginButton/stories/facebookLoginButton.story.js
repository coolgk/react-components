import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FacebookLoginButton from '../dist/facebookLoginButton';
import readme from '../README.md';

storiesOf('Facebook Login Button', module)
    .add(
        'Demo',
        // withNotes(readme)(
        () => (
            <div style={{padding: '1em'}}>
                <FacebookLoginButton
                    appId={process.env.STORYBOOK_FACEBOOK_CLIENT_ID || ''}
                    callback={action('facebook login response callback')}
                />
            </div>
        )
        // )
    )
    .add(
        'Read Me',
        () => <div style={{padding: '1em'}} dangerouslySetInnerHTML={{__html: readme}} />
    )
;
