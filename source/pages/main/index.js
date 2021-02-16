// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// @scripts
import Button from '../../components/atoms/button';

// @styles
import styles from './styles';
import { removeData } from '../../utils/auth';

const MainPage = ({ navigation }) => {
    const onLogout = async () => {
        await removeData('auth_data');
        navigation.navigate('Auth');
    };

    return (
    <View style={styles.container}>
      <Text>🌎 HOME PAGE 🌎</Text>
      <Button
          buttonStyle={styles.buttonStyle}
          onPress={onLogout}
          textStyle={styles.textStyle}
      >
        Logout
      </Button>
    </View>
    );
};

MainPage.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default MainPage;
