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
  },
  forgot: {
    fontSize: 11,
  },
  icon: {
    fontSize: 20
  },
  input: {
    alignSelf: "center",
    backgroundColor: Styles.Colors.PRIMARY,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginBottom: 35,
    padding: 20,
    position: "relative",
    width: "80%",
  },
  inputText: {
    color: "white"
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
    width: "40%",
  },
  mainTitle: {
    fontSize: 29,
    marginBottom: 20,
    textAlign: "center",
  },
  touchableButton: {
    height: 25,
    padding: 2,
    position: "absolute",
    right: 3,
    width: 35,
  },
});
