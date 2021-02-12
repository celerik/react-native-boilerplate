// @packages
import { createStackNavigator } from 'react-navigation-stack';
import ForgotPasswordScreen from '../pages/forgot-password';
import LoginScreen from '../containers/login-page';
import SignUpScreen from '../containers/sign-up-page';

const AuthNavigatorConfig = {
    header: null,
    initialRouteName: 'Login'
};

const RouteConfigs = {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    ForgotPassword: ForgotPasswordScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
