//@packages
import Login from "../../pages/login-page";
import LoginContext from "./context";
import React from "react";
import initState from "./initial-state.json";

const LoginPage = ({ navigation }) => {
  const [state, setState] = React.useState(initState);

  return (
    <LoginContext.Provider value={{ state, setState }}>
      <Login navigation={navigation} />
    </LoginContext.Provider>
  );
};

export default LoginPage;
