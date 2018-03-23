// setup file
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import * as React from 'react';
import { shallow } from 'enzyme';

import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';

import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';

import GoogleLoginButton from '../src/googleLoginButton';

describe('<GoogleLoginButton />', () => {

    let clientId: string;
    let onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;

    before(() => {
        clientId = String(Math.random());
        onSuccess = sinon.stub();
    });

    it('renders <GoogleLogin />', () => {
        const wrapper = shallow(<GoogleLoginButton clientId={clientId} callback={onSuccess} />);
        expect(wrapper.find('span.google-login-button')).to.have.length(1);
        expect(wrapper.find(GoogleLogin)).to.have.length(1);
        expect(wrapper.contains(<FontAwesomeIcon icon={['fab', 'google']} />)).to.be.true;
    });

    it('should include css file');

});
