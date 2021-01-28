// @packages
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { View, TouchableOpacity } from 'react-native';

// @scripts
import CtrlInput from '../../molecules/ctrl-input';
import Icon from '../../atoms/ctrl-icons';

// @scripts
import styles from './styles';

const CtrlInputController = ({
    control,
    defaultValue,
    errorMessage,
    errors,
    isRequired,
    name,
    placeHolder,
    placeHolderTextColor,
    regexExpression,
    regexMessage,
    showPasswordIcon,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(!!showPasswordIcon);

    const onSetVisibility = () => setShowPassword(!showPassword);

    return (
    <Controller
        {...props}
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ onChange, value }) => (
        <View style={styles.searchSection}>
          <CtrlInput
              errorText={errors[name]?.message}
              onChangeText={(text) => onChange(text)}
              placeholder={placeHolder}
              placeholderTextColor={placeHolderTextColor}
              inputStyle={styles.inputPassword}
              secureTextEntry={showPassword}
              style={styles.inputText}
              value={value}
          />
          {showPasswordIcon && (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.touchableButton}
                onPress={onSetVisibility}
            >
              {showPassword ? (
                <Icon name="eye" size={20} />
              ) : (
                <Icon name="eye-off" size={20} />
              )}
            </TouchableOpacity>
          )}
        </View>
        )}
        rules={{
            required: { value: isRequired, message: errorMessage },
            pattern: {
                message: regexMessage,
                value: regexExpression
            }
        }}
    />
    );
};

CtrlInputController.propTypes = {
    control: PropTypes.object.isRequired,
    defaultValue: PropTypes.string,
    errorMessage: PropTypes.string,
    errors: PropTypes.object,
    isRequired: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    placeHolderTextColor: PropTypes.string,
    regexExpression: PropTypes.any,
    regexMessage: PropTypes.string,
    showPasswordIcon: PropTypes.bool
};

CtrlInputController.defaultProps = {
    showPasswordIcon: false
};

export default CtrlInputController;
