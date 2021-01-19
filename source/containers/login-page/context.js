//@packages
import React from "react";
import initState from "./initState.json";

const loginState = React.createContext({
  state: initState,
  setState: () => {},
});

export default loginState;
