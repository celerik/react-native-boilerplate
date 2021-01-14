import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>🌳 Welcome to CELERIK 🌳</Text>
      <TextInput style={styles.input} placeholder="Enter your email"/>
      <TextInput style={styles.input} placeholder="Enter your password"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: "1px solid #000",
    marginBottom: 10,
    padding: 15,
    width: "90%",
  }
});

export default App;