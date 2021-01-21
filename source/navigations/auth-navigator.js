//@packages
import ForgotPasswordScreen from "../pages/forgotPassword";
import LoginScreen from "../containers/login-page";
import SignUpScreen from "../containers/sign-up-page";
import { createStackNavigator } from "react-navigation-stack";

const AuthNavigatorConfig = {
  header: null,
  initialRouteName: "Login",
};

const RouteConfigs = {
  Login: LoginScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
