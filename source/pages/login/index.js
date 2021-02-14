// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

// @scripts
import Button from '../../components/atoms/button';
import CtrlInputController from '../../components/organisms/ctr-input-form';
import { config } from '../../resources';
import { storeData } from '../../utils/auth';

// @styles
import styles from './styles';

// @const
import { EMAIL_REGEX } from '../../utils/regex-expresions';

const LoginPage = ({ navigation }) => {
  const { errors, handleSubmit, control } = useForm();

  const onChangeScreen = (name) => navigation.navigate(name);

  const onLogin = async (data) => {
    await storeData({ email: data.email }, 'auth_data');
    onChangeScreen('App');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{config.text.loginPage.title}</Text>
      <CtrlInputController
        control={control}
        defaultValue=""
        errorMessage={config.text.loginPage.errorMessageEmail}
        errors={errors}
        isRequired
        name="email"
        placeHolder={config.text.loginPage.email}
        placeHolderTextColor="#fff"
        regexExpression={EMAIL_REGEX}
        regexMessage={config.text.loginPage.errorMessageRegexExpr}
      />
      <CtrlInputController
        control={control}
        defaultValue=""
        errorMessage={config.text.loginPage.errorMessagePassword}
        errors={errors}
        isRequired
        name="password"
        placeHolder={config.text.loginPage.password}
        placeHolderTextColor="#fff"
        showPasswordIcon
      />
      <Button
        onPress={() => onChangeScreen('ForgotPassword')}
        textStyle={styles.forgot}
      >
        {config.text.loginPage.forgotPassword}
      </Button>
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => onChangeScreen('SignUp')}
        textStyle={styles.buttonText}
      >
        {config.text.loginPage.signUp}
      </Button>
      <Button
        buttonStyle={styles.loginButton}
        onPress={handleSubmit(onLogin)}
        textStyle={styles.buttonText}
      >
        {config.text.loginPage.login}
      </Button>
    </View>
  );
};

LoginPage.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default LoginPage;
