import Login from "../../pages/login-page";
import LoginContext from "./context";
import React from "react";
import initState from "./initState.json";

const LoginPage = () => {
  const [state, setState] = React.useState(initState);

  return (
    <LoginContext.Provider value={{ state, setState }}>
      <Login />
    </LoginContext.Provider>
  );
};

export default LoginPage;
