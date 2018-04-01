// setup file
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import * as React from 'react';
import { shallow } from 'enzyme';

import * as sinon from 'sinon';
import { expect } from 'chai';

import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';

import fontawesome from '@fortawesome/fontawesome';
import * as faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
fontawesome.library.add(faFacebookF);

import { Button } from 'react-bootstrap';

import FacebookLoginButton from '../src/facebookLoginButton';

describe('<FacebookLoginButton />', () => {

    let appId: string;
    let callback: () => void;
    let textButton: string;
    let facebookLoginButton: any;
    let buttonText: string;

    beforeEach(() => {
        appId = String(Math.random());
        textButton = String(Math.random());
        buttonText = String(Math.random());
        callback = sinon.spy();
        const props = { appId, callback, textButton };
        facebookLoginButton = shallow(<FacebookLoginButton {...props} />);
    });

    it('renders <FacebookLoginButton />', () => {
        const reactFacebookLoginElement = facebookLoginButton.find(ReactFacebookLogin);
        expect(reactFacebookLoginElement).to.have.length(1);
        expect(reactFacebookLoginElement.prop('textButton')).to.equal(textButton);
        expect(reactFacebookLoginElement.prop('appId')).to.equal(appId);
    });

    // @fortawesome/react-fontawesome bug waiting for v0.1.0
    it.skip('renders <Button>', () => {
        const reactFacebookLoginElement = facebookLoginButton.find(ReactFacebookLogin);

        const renderProps = {
            onClick: callback,
            isDisabled: false,
            isProcessing: false,
            isSdkLoaded: true
        };

        const ButtonElement = reactFacebookLoginElement.prop('render');
        const buttonElement = shallow(<ButtonElement {...renderProps} />);
        let button = buttonElement.find(Button);

        expect(button.prop('className')).to.equal('facebook-login-button');
        expect(button.prop('bsStyle')).to.equal('primary');

        button = button.shallow();
        expect(button.find(FontAwesomeIcon)).to.have.length(1);
        expect(button.contains(<FontAwesomeIcon icon={['fab', 'facebook-f']} />)).to.be.true;

        // expect(button.find('.fab.fa-facebook-f')).to.have.length(1);
        // expect(button.contains(<i className="fab fa-facebook-f"></i>)).to.be.true;

        expect(button.render().text()).to.equal('Login with Facebook');
    });

    // @fortawesome/react-fontawesome bug waiting for v0.1.0
    it.skip('sets button text', () => {
        const props = { appId, callback, buttonText };
        facebookLoginButton = shallow(<FacebookLoginButton {...props} />);
        const reactFacebookLoginElement = facebookLoginButton.find(ReactFacebookLogin);
        const buttonElement = (reactFacebookLoginElement.prop('render') as any)({ isSdkLoaded: true, isProcessing: true });
        const divWrapper = shallow(<div>{buttonElement}</div>);
        const button = divWrapper.find(Button);

        expect(button.prop('disabled')).to.be.true;
        expect(button.render().text()).to.equal(buttonText);
    });

    // @fortawesome/react-fontawesome bug waiting for v0.1.0
    it.skip('disables button if skd is not loaded', () => {
        const props = { appId, callback, buttonText };
        facebookLoginButton = shallow(<FacebookLoginButton {...props} />);
        const reactFacebookLoginElement = facebookLoginButton.find(ReactFacebookLogin);
        const buttonElement = (reactFacebookLoginElement.prop('render') as any)({ isSdkLoaded: false });
        const divWrapper = shallow(<div>{buttonElement}</div>);
        const button = divWrapper.find(Button);

        expect(button.prop('disabled')).to.be.true;
    });
});
