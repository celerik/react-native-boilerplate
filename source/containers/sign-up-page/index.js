// @packages
import React from 'react';
import LoginContext from './context';
import SignUp from '../../pages/sign-up';
import initState from './initState.json';

const SignUpPage = () => {
    const [state, setState] = React.useState(initState);

    return (
    <LoginContext.Provider value={{ state, setState }}>
      <SignUp />
    </LoginContext.Provider>
    );
};

export default SignUpPage;
