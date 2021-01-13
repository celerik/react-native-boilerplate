import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center'
    }
});

const App = () => (
    <View style={styles.container}>
      <Text>🌳 Welcome to CELERIK 🌳</Text>
      <StatusBar style="auto" />
    </View>
);

export default App;
