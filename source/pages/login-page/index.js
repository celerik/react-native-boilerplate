//@packages
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

//@scripts
import { logIn } from '../../utils/api/auth'
import CtrlInput from "../../components/common/ctrl-input";
import Icon from "../../components/common/ctrl-icons";
import { lang } from "../../resources/index";
import { storeData } from "../../utils/auth";

//@styles
import styles from "./styles";

const LoginPage = ({ navigation }) => {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { errors, handleSubmit, control } = useForm();
  const [showPassword, setShowPassword] = useState(true);

  const onSetVisibility = () => setShowPassword(!showPassword);

  const onLogin = async (data) => {
    const result = await logIn(data.email, data.password)
    logIn(data.email, data.password)
    .then((res) => res.json())
      .then((result) => {
      });
    if(result.status === 201) {
      await storeData({ email: data.email }, "auth_data");
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{lang.en.loginPage.title}</Text>
      <Controller
        defaultValue=""
        name="email"
        control={control}
        render={({ onChange, value }) => (
          <CtrlInput
            errorText={errors?.email?.message}
            onChangeText={(text) => onChange(text)}
            placeholder={lang.en.loginPage.email}
            inputStyle={styles.input}
            placeholderTextColor="#fff"
            value={value}
          />
        )}
        rules={{
          required: { value: true, message: "Email is required" },
          pattern: {
            message: "Not a valid email",
            value: EMAIL_REGEX,
          },
        }}
      ></Controller>
      <Controller
        defaultValue=""
        name="password"
        control={control}
        render={({ onChange, value }) => (
          <View style={styles.searchSection}>
            <CtrlInput
              errorText={errors?.password?.message}
              onChangeText={(text) => onChange(text)}
              placeholder={lang.en.loginPage.password}
              placeholderTextColor="#fff"
              inputStyle={styles.inputPassword}
              secureTextEntry={showPassword}
              style={styles.inputText}
              value={value}
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
        )}
        rules={{ required: { value: true, message: "Password is required" } }}
      ></Controller>
      <TouchableOpacity>
        <Text style={styles.forgot}>{lang.en.loginPage.forgotPassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>{lang.en.loginPage.signUp}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit(onLogin)}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>{lang.en.loginPage.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginPage;
