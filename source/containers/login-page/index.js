// @packages
import React from 'react';
import Login from '../../pages/login';
import LoginContext from './context';
import initState from './initState.json';

const LoginPage = ({ navigation }) => {
    const [state, setState] = React.useState(initState);

    return (
    <LoginContext.Provider value={{ state, setState }}>
      <Login navigation={navigation} />
    </LoginContext.Provider>
    );
};

export default LoginPage;
