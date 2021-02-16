// @packages
import React from 'react';
import initState from './init-state.json';

const homeState = React.createContext({
    state: initState,
    setState: () => {}
});

export default homeState;
