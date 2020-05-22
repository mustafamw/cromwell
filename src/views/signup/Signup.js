import React from 'react';
import './Signup.scss';
import SignupComponent from '../../components/signup/Signup';


class SignupView extends React.Component {
    render() {
      return (
        <div>
            <SignupComponent />
        </div>
      );
    }
  }
  
  export default SignupView;