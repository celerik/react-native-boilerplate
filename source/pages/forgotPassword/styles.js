//@packages
import { StyleSheet } from "react-native";
import Styles from "../../styles/index";

export default StyleSheet.create({
  buttonText: {
    color: "white",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    width: '100%'
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: Styles.Colors.SECONDARY,
    borderRadius: 25,
    color: Styles.Colors.WHITE,
    height: 50,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
    position: "relative",
    width: "40%",
  },
  mainTitle: {
    fontSize: 29,
    marginBottom: 20,
    textAlign: "center",
  },
});
