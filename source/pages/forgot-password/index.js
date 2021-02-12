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

const ForgotPasswordPage = () => {
    const { errors, handleSubmit, control } = useForm();

    const onRecoverAccount = (data) => {
        showSnackBar({
            message: `A link to change your password was sent to ${data.email}`,
            actionText: 'Ok'
        });
    };

    return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{lang.en.forgotPasswordPage.title}</Text>
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={lang.en.forgotPasswordPage.errorMessageEmail}
          errors={errors}
          isRequired
          name="email"
          placeHolder={lang.en.forgotPasswordPage.email}
          placeHolderTextColor="#fff"
          regexExpression={EMAIL_REGEX}
          regexMessage={lang.en.forgotPasswordPage.errorMessageRegexExpr}
      />
      <Button
          onPress={handleSubmit(onRecoverAccount)}
          buttonStyle={styles.loginButton}
          textStyle={styles.buttonText}
      >
        {lang.en.forgotPasswordPage.recoverPassword}
      </Button>
    </View>
    );
};

ForgotPasswordPage.propTypes = {};

export default ForgotPasswordPage;
