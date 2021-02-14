// @packages
import React, { useEffect, useState } from 'react';
import Navigator from '../navigations';

// @scripts
import { getData } from '../utils/auth';
import { MainPageProvider } from '../core';

const AppContainer = () => {
    const [initRoute, setInitRoute] = useState('Auth');

    useEffect(() => {
        getData('auth_data').then((value) => {
            if (value && value.email) {
                setInitRoute('App');
            } else {
                setInitRoute('Auth');
            }
        });
    }, []);

    return (
        <MainPageProvider>
            <Navigator initRoute={initRoute} />
        </MainPageProvider>
    );
};

export default AppContainer;
