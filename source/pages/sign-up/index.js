// @packages
import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

// @scripts
import Button from '../../components/atoms/button';
import CtrlInputController from '../../components/organisms/ctr-input-form';
import { config } from '../../resources';
import { showSnackBar } from '../../utils/snackbar';

// @styles
import styles from './styles';

// @const
import { EMAIL_REGEX } from '../../utils/regex-expresions';

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
      <Text style={styles.mainTitle}>{config.text.signUpPage.register}</Text>
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={config.text.signUpPage.errorMessageEmail}
          errors={errors}
          isRequired
          name="email"
          placeHolder={config.text.signUpPage.email}
          placeHolderTextColor="#fff"
          regexExpression={EMAIL_REGEX}
          regexMessage={config.text.signUpPage.errorMessageRegexExpr}
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={config.text.signUpPage.errorMessageName}
          errors={errors}
          isRequired
          name="name"
          placeHolder={config.text.signUpPage.name}
          placeHolderTextColor="#fff"
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={config.text.signUpPage.errorMessagePassword}
          errors={errors}
          isRequired
          name="password"
          placeHolder={config.text.signUpPage.password}
          placeHolderTextColor="#fff"
          showPasswordIcon
      />
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={config.text.signUpPage.errorMessageConfirmPassword}
          errors={errors}
          isRequired
          name="confirmPassword"
          placeHolder={config.text.signUpPage.confirmPassword}
          placeHolderTextColor="#fff"
          showPasswordIcon
      />
      <Button
          onPress={handleSubmit(onRegister)}
          buttonStyle={styles.loginButton}
          textStyle={styles.buttonText}
      >
        {config.text.signUpPage.register}
      </Button>
    </View>
    );
};

SignUpPage.propTypes = {};

export default SignUpPage;
