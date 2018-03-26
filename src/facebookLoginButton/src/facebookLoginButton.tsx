import * as React from 'react';
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Button } from 'react-bootstrap';

// FontAwesomeIcon 26 March causes typescript compile problems
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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
                <i className="fab fa-facebook-f"></i>
                {props.buttonText || 'Login with Facebook'}
            </Button>
        ); // <FontAwesomeIcon icon={['fab', 'facebook-f']} />
    };

    return (
        <ReactFacebookLogin
            render={button}
            {...props}
        />
    );
}

export default FacebookLoginButton;
