// @packages
import React from 'react';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';

// @scripts
import Button from '../../components/atoms/button';
import CtrlInputController from '../../components/organisms/ctr-input-form';
import { config } from '../../resources/index';
import { showSnackBar } from '../../utils/snackbar';

// @styles
import styles from './styles';

// @const
import { EMAIL_REGEX } from '../../utils/regex-expresions';

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
      <Text style={styles.mainTitle}>{config.text.forgotPasswordPage.title}</Text>
      <CtrlInputController
          control={control}
          defaultValue=""
          errorMessage={config.text.forgotPasswordPage.errorMessageEmail}
          errors={errors}
          isRequired
          name="email"
          placeHolder={config.text.forgotPasswordPage.email}
          placeHolderTextColor="#fff"
          regexExpression={EMAIL_REGEX}
          regexMessage={config.text.forgotPasswordPage.errorMessageRegexExpr}
      />
      <Button
          onPress={handleSubmit(onRecoverAccount)}
          buttonStyle={styles.loginButton}
          textStyle={styles.buttonText}
      >
        {config.text.forgotPasswordPage.recoverPassword}
      </Button>
    </View>
    );
};

ForgotPasswordPage.propTypes = {};

export default ForgotPasswordPage;
