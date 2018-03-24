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

export function FacebookLoginButton (props: IProps): React.ReactElement<IProps> {
    const button = (renderProps: IRenderProps) => {
        return renderProps.isSdkLoaded ? (
            <Button
                onClick={renderProps.onClick}
                disabled={renderProps.isDisabled || renderProps.isProcessing}
                className="facebook-login-button"
                bsStyle="primary"
            >
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                {props.buttonText || 'Login with Facebook'}
            </Button>
        ) : false;
    }

    return (
        <ReactFacebookLogin
            render={button}
            {...props}
        />
    );
}

export default FacebookLoginButton;

/*
export function button (props: IButtonProps): React.ReactElement<IButtonProps> | false {
    return props.isSdkLoaded ? (
        <Button
            onClick={props.onClick}
            disabled={props.isDisabled && !props.isProcessing}
            className="facebook-login-button"
            bsStyle="primary"
        >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            Login with Facebook
        </Button>
    ) : false;
} */
