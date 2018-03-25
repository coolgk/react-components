import * as React from 'react';
import * as ReactDOM from 'react-dom';

import fontawesome from '@fortawesome/fontawesome';
import * as faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import * as faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
fontawesome.library.add(faFacebookF, faGoogle);

// import GoogleLoginButton from './googleLoginButton/src/googleLoginButton'
import FacebookLoginButton from './facebookLoginButton/src/facebookLoginButton'
import GoogleLoginButton from '@coolgk/react-google-login-button'

ReactDOM.render(
  <div>
    <GoogleLoginButton clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''} callback={console.log} />
    <br /><br />
    <FacebookLoginButton appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID || ''} callback={console.log} />
  </div>,
  document.getElementById('root') as HTMLElement
);
