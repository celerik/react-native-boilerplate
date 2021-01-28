// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

// @scripts
import Button from '../../components/atoms/button';
import CtrlInputController from '../../components/organisms/ctr-input-form';
import { lang } from '../../resources/index';
import { storeData } from '../../utils/auth';

// @styles
import styles from './styles';

// @const
import { EMAIL_REGEX } from '../../utils/regexExpresions';

const LoginPage = ({ navigation }) => {
    const { errors, handleSubmit, control } = useForm();

    const onChangeScreen = (name) => navigation.navigate(name);

    const onLogin = async (data) => {
        await storeData({ email: data.email }, 'auth_data');
        onChangeScreen('App');
    };

    return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{lang.en.loginPage.title}</Text>
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.loginPage.errorMessageEmail}
          errors={errors}
          isRequired
          name="email"
          placeHolder={lang.en.loginPage.email}
          placeHolderTextColor="#fff"
          regexExpression={EMAIL_REGEX}
          regexMessage={lang.en.loginPage.errorMessageRegexExpr}
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.loginPage.errorMessagePassword}
          errors={errors}
          isRequired
          name="password"
          placeHolder={lang.en.loginPage.password}
          placeHolderTextColor="#fff"
          showPasswordIcon
      />
      <Button
          onPress={() => onChangeScreen('ForgotPassword')}
          textStyle={styles.forgot}
      >
        {lang.en.loginPage.forgotPassword}
      </Button>
      <Button
          buttonStyle={styles.loginButton}
          onPress={() => onChangeScreen('SignUp')}
          textStyle={styles.buttonText}
      >
        {lang.en.loginPage.signUp}
      </Button>
      <Button
          buttonStyle={styles.loginButton}
          onPress={handleSubmit(onLogin)}
          textStyle={styles.buttonText}
      >
        {lang.en.loginPage.login}
      </Button>
    </View>
    );
};

LoginPage.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default LoginPage;
