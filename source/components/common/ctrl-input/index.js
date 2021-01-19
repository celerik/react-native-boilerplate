//@packages
import PropTypes from "prop-types";
import React from "react";
import { Text, TextInput, View } from "react-native";

//@scripts
import styles from "./styles";

const CtrlInput = (props) => {
  return (
    <View style={styles.inputComponent}>
      <TextInput {...props} style={props.inputStyle} />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

CtrlInput.propTypes = {
  errorText: PropTypes.string,
  inputStyle: PropTypes.object,
};

export default CtrlInput;
