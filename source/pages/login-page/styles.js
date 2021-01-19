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
  forgot: {
    fontSize: 11,
  },
  icon: {
    fontSize: 20,
  },
  input: {
    alignSelf: "center",
    backgroundColor: Styles.Colors.PRIMARY,
    borderRadius: 25,
    color: "white",
    height: 55,
    justifyContent: "center",
    marginBottom: 5,
    padding: 20,
    position: "relative",
    width: "80%",
  },
  inputPassword: {
    backgroundColor: Styles.Colors.PRIMARY,
    borderRadius: 25,
    color: 'white',
    height: 55,
    padding: 20,
    margin: 0,
    width: '80%',
  },
  inputText: {
    color: "white",
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
  searchSection: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    marginBottom: 10
  },
  touchableButton: {
    position: 'absolute',
    right: 50,
    top: 15,
  },
});
