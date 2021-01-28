// @packages
import React, { useState } from 'react';
import HomeContext from './context';
import initState from './initState.json';

// @scripts
import Home from '../../pages/main';

const HomePage = ({ navigation }) => {
    const [state, setState] = useState(initState);

    return (
    <HomeContext.Provider value={{ state, setState }}>
      <Home navigation={navigation} />
    </HomeContext.Provider>
    );
};

export default HomePage;
