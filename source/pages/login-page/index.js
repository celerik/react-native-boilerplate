//@packages
import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";

//@scripts
import Button from "../../components/atoms/button";
import CtrlInputController from "../../components/organisms/ctr-input-form";
import { lang } from "../../resources/index";
import { storeData } from "../../utils/auth";

//@styles
import styles from "./styles";

const LoginPage = ({ navigation }) => {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { errors, handleSubmit, control } = useForm();

  const onLogin = async (data) => {
    await storeData({ email: data.email }, "auth_data");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{lang.en.loginPage.title}</Text>
      <CtrlInputController
        control={control}
        defaultValue=""
        errorMessage="Email is required"
        errors={errors}
        isRequired={true}
        name="email"
        placeHolder="Enter your email"
        placeHolderTextColor="#fff"
        regexExpression={EMAIL_REGEX}
        regexMessage="Not a valid email"
      />
      <CtrlInputController
        control={control}
        defaultValue=""
        errorMessage="Password is required"
        errors={errors}
        isRequired={true}
        name="password"
        placeHolder="Enter your password"
        placeHolderTextColor="#fff"
        showPasswordIcon={true}
      />
      <Button onPress={Function.prototype} textStyle={styles.forgot}>
        {lang.en.loginPage.forgotPassword}
      </Button>
      <Button
        onPress={Function.prototype}
        buttonStyle={styles.loginButton}
        textStyle={styles.buttonText}
      >
        {lang.en.loginPage.signUp}
      </Button>
      <Button
        onPress={handleSubmit(onLogin)}
        buttonStyle={styles.loginButton}
        textStyle={styles.buttonText}
      >
        {lang.en.loginPage.login}
      </Button>
    </View>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginPage;
