// @packages
import React from 'react';
import initState from './initState.json';

const homeState = React.createContext({
    state: initState,
    setState: () => {}
});

export default homeState;
