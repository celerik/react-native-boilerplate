// @packages
import React from 'react';
import initState from './init-state.json';

const loginState = React.createContext({
    state: initState,
    setState: () => {}
});

export default loginState;
