// @packages
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// @scripts
import App from '../source/containers/app';

it('renders correctly', () => {
    renderer.create(<App />);
});
