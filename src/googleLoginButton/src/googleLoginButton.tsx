import * as React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';

import fontawesome from '@fortawesome/fontawesome';
import * as faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
fontawesome.library.add(faGoogle);

import './googleLoginButton.css';

export { GoogleLoginResponse, GoogleLoginResponseOffline };

export interface IProps {
    callback: (response: any) => void,
    clientId: string,
    [prop: string]: any;
}

export function GoogleLoginButton (props: IProps): React.ReactElement<IProps> {
    const googleLoginProps = {
        onSuccess: props.callback,
        onFailure: props.callback,
        ...props,
        className: 'btn btn-danger'
    };

    return (
        <span className="google-login-button">
            <FontAwesomeIcon icon={['fab', 'google']} />
            <GoogleLogin {...googleLoginProps} />
        </span>
    );
}

export default GoogleLoginButton;
