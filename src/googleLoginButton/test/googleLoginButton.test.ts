/* import * as React from 'react';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';

import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import GoogleLoginButton from '../../src/components/googleLoginButton/googleLoginButton';

// import MyComponent from './MyComponent';
// import Foo from './Foo';

describe('<GoogleLoginButton />', () => {

    let clientId: string;
    let onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;

    before(() => {
        clientId = String(Math.random());
        onSuccess = sinon.stub();
    });

    it('renders <GoogleLogin />', () => {
        const wrapper = shallow(<GoogleLoginButton clientId={clientId} onSuccess={onSuccess} />);
        // expect(wrapper.find(GoogleLogin)).to.have.length(1);
    });

    it('should include css file');

    // it('renders an `.icon-star`', () => {
        //     const wrapper = shallow(<MyComponent />);
        //     expect(wrapper.find('.icon-star')).to.have.length(1);
        // });

        // it('renders children when passed in', () => {
            //   const wrapper = shallow((
                //     <MyComponent>
                //       <div className="unique" />
                //     </MyComponent>
                //   ));
                //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
                // });

                // it('simulates click events', () => {
                    //   const onButtonClick = sinon.spy();
    //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    //   wrapper.find('button').simulate('click');
    //   expect(onButtonClick).to.have.property('callCount', 1);
    // });
});
 */