//@packages
import LoginScreen from "../containers/login-page";
import { createStackNavigator } from "react-navigation-stack";

const AuthNavigatorConfig = {
  header: null,
  headerMode: "none",
  initialRouteName: "Login",
};

const RouteConfigs = {
  Login: LoginScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
