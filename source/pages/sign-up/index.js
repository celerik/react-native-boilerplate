// @packages
import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

// @scripts
import Button from '../../components/atoms/button';
import CtrlInputController from '../../components/organisms/ctr-input-form';
import { lang } from '../../resources/index';
import { showSnackBar } from '../../utils/snackbar';

// @styles
import styles from './styles';

// @const
import { EMAIL_REGEX } from '../../utils/regexExpresions';

const SignUpPage = () => {
    const { errors, handleSubmit, control } = useForm();

    const onRegister = () => {
        showSnackBar({
            message: 'User is registered',
            actionText: 'Ok'
        });
    };

    return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{lang.en.signUpPage.register}</Text>
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.signUpPage.errorMessageEmail}
          errors={errors}
          isRequired
          name="email"
          placeHolder={lang.en.signUpPage.email}
          placeHolderTextColor="#fff"
          regexExpression={EMAIL_REGEX}
          regexMessage={lang.en.signUpPage.errorMessageRegexExpr}
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.signUpPage.errorMessageName}
          errors={errors}
          isRequired
          name="name"
          placeHolder={lang.en.signUpPage.name}
          placeHolderTextColor="#fff"
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.signUpPage.errorMessagePassword}
          errors={errors}
          isRequired
          name="password"
          placeHolder={lang.en.signUpPage.password}
          placeHolderTextColor="#fff"
          showPasswordIcon
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.signUpPage.errorMessageConfirmPassword}
          errors={errors}
          isRequired
          name="confirmPassword"
          placeHolder={lang.en.signUpPage.confirmPassword}
          placeHolderTextColor="#fff"
          showPasswordIcon
      />
      <Button
          onPress={handleSubmit(onRegister)}
          buttonStyle={styles.loginButton}
          textStyle={styles.buttonText}
      >
        {lang.en.signUpPage.register}
      </Button>
    </View>
    );
};

SignUpPage.propTypes = {};

export default SignUpPage;
