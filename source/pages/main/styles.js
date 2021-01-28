// @packages
import { StyleSheet } from 'react-native';
import Styles from '../../styles/index';

export default StyleSheet.create({
    buttonStyle: {
        backgroundColor: Styles.Colors.PRIMARY,
        borderRadius: 10,
        marginTop: '50%'
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        padding: 10
    }
});
