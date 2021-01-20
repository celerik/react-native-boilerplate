//@packages
import { StyleSheet } from "react-native";
import Styles from "../../../styles/index";

export default StyleSheet.create({
    
  inputPassword: {
    backgroundColor: Styles.Colors.PRIMARY,
    borderRadius: 25,
    color: "white",
    height: 55,
    padding: 20,
    margin: 0,
    width: "80%",
  },
  inputText: {
    color: "white",
  },
  searchSection: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    marginBottom: 10,
  },
  touchableButton: {
    position: 'absolute',
    right: 50,
    top: 15,
  },
});
