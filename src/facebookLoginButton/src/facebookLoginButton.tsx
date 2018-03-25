import * as React from 'react';
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

import '../assets/facebookLoginButton.css';

interface IRenderProps {
    onClick: () => void;
    isDisabled: boolean;
    isProcessing: boolean;
    isSdkLoaded: boolean;
};

export interface IProps {
    appId: string;
    buttonText?: string;
    [prop: string]: any;
}

export function FacebookLoginButton (props: IProps) {
    const button = (renderProps: IRenderProps) => {
        return (
            <Button
                onClick={renderProps.onClick}
                disabled={renderProps.isDisabled || renderProps.isProcessing || !renderProps.isSdkLoaded}
                className="facebook-login-button"
                bsStyle="primary"
            >
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                {props.buttonText || 'Login with Facebook'}
            </Button>
        );
    };

    return (
        <ReactFacebookLogin
            render={button}
            {...props}
        />
    );
}

export default FacebookLoginButton;
