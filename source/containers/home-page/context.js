//@packages
import React from "react";
import initState from "./initial-state.json";

const homeState = React.createContext({
  setState: () => {},
  state: initState,
});

export default homeState;
