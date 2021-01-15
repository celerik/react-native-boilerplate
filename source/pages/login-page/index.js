//@packages
import React, { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

//@scripts
import Icon from "../../components/common/ctrl-icons";
import Context from "../../containers/login-page/context";
import { lang } from "../../resources/index";

//@styles
import styles from "./styles";

const App = () => {
  const { state, setState } = useContext(Context);
  const [showPassword, setShowPassword] = useState(true);

  const onSetVisibility = () => setShowPassword(!showPassword);

  const onChangeState = () => {
    const copyState = { ...state };
    copyState.isLoggedIn = !copyState.isLoggedIn;
    setState(copyState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{lang.en.loginPage.title}</Text>
      <View style={styles.input}>
        <TextInput
          placeholder={lang.en.loginPage.email}
          placeholderTextColor="#fff"
          style={styles.inputText}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder={lang.en.loginPage.password}
          placeholderTextColor="#fff"
          secureTextEntry={showPassword}
          style={styles.inputText}
        />
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
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>{lang.en.loginPage.forgotPassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text>{lang.en.loginPage.signUp}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onChangeState} style={styles.loginButton}>
        <Text>{lang.en.loginPage.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
