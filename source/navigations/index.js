//@packages
import { createAppContainer, createSwitchNavigator } from "react-navigation";

//@scripts
import AuthNavigator from "./auth-navigator";
import AppNavigator from "./app-navigator";

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: "Auth",
  }
);

export default createAppContainer(RootNavigator);
