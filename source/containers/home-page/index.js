//@packages
import HomeContext from "./context";
import React from "react";
import { Text } from "react-native";
import initState from "./initState.json";

const HomePage = () => {
  const [state, setState] = React.useState(initState);

  return (
    <HomeContext.Provider value={{ state, setState }}>
      <Text>🌎 HOME PAGE 🌎</Text>
    </HomeContext.Provider>
  );
};

export default HomePage;
