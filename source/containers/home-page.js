// @packages
import React from 'react';
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
    </View>
);

export default App;
