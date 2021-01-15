import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    backgroundColor: "#F15E22",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    marginBottom: 20,
    padding: 20,
    position: "relative",
    width: "80%",
  },
  inputText: {
    color: "white",
    height: 50,
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#E34163",
    borderRadius: 25,
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
