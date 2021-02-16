// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// @scripts
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

const Navigator = ({ initRoute }) => {
    const RootNavigator = createSwitchNavigator(
        {
            Auth: AuthNavigator,
            App: AppNavigator
        },
        {
            initialRouteName: initRoute
        }
    );
    const Container = createAppContainer(RootNavigator);
    return <Container />;
};

Navigator.propTypes = {
    initRoute: PropTypes.string.isRequired
};

export default Navigator;
