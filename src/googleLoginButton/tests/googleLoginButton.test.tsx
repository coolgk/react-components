// setup file
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import * as React from 'react';
import { shallow } from 'enzyme';

import * as sinon from 'sinon';
import { expect } from 'chai';

import { GoogleLogin } from 'react-google-login';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';

import GoogleLoginButton from '../src/googleLoginButton';

describe('<GoogleLoginButton />', () => {

    let clientId: string;
    let callback: () => void;

    before(() => {
        clientId = String(Math.random());
        callback = sinon.spy();
    });

    it('renders <GoogleLogin />', () => {
        const props = { clientId, callback };
        const googleLoginProps = {
            ...props,
            onSuccess: callback,
            onFailure: callback,
            className: 'btn btn-danger'
        };

        const wrapper = shallow(<GoogleLoginButton {...props} />);
        expect(wrapper.find('span.google-login-button')).to.have.length(1);
        expect(wrapper.find(GoogleLogin)).to.have.length(1);
        expect(wrapper.find(FontAwesomeIcon)).to.have.length(1);
        expect(wrapper.contains(<GoogleLogin {...googleLoginProps} />)).to.be.true;
        expect(wrapper.contains(<FontAwesomeIcon icon={['fab', 'google']} />)).to.be.true;
    });

    it('should include css file');
});
