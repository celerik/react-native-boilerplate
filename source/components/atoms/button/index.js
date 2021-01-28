// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// @styles
import styles from './styles';

const Button = ({
    buttonStyle,
    children,
    onPress,
    textStyle,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        onPress={onPress}
        style={{ ...styles.defaultStyle, ...buttonStyle }}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
);

Button.propTypes = {
    buttonStyle: PropTypes.object,
    children: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    textStyle: PropTypes.object.isRequired
};

export default Button;
