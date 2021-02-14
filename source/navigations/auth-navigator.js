// @packages
import { createStackNavigator } from 'react-navigation-stack';
import ForgotPasswordScreen from '../pages/forgot-password';
import LoginScreen from '../pages/login';
import SignUpScreen from '../pages/sign-up';

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
