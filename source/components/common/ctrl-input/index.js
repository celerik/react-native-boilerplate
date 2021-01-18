//@packages
import PropTypes from "prop-types";
import React from "react";
import { View, Text, TextInput } from "react-native";

//@scripts
import styles from "./styles";

const CtrlInput = (props) => {
  return (
    <View>
      <TextInput {...props} />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

CtrlInput.propTypes = {
  errorText: PropTypes.string,
};

export default CtrlInput;
