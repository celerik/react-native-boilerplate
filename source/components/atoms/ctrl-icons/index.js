// @packages
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import React from 'react';
import { Platform } from 'react-native';

const CustomIcon = ({ name, ...props }) => (
  <Icon
      name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
      {...props}
  />
);

CustomIcon.propTypes = {
    name: PropTypes.string.isRequired
};

export default CustomIcon;
