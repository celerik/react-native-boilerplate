// @packages
import { StyleSheet } from 'react-native';
import Styles from '../../../styles/index';

export default StyleSheet.create({
    errorText: {
        color: Styles.Colors.ERROR,
        marginBottom: 15,
        marginLeft: 40,
        marginTop: 4,
        width: '80%'
    },
    inputComponent: {
        alignItems: 'center',
        display: 'flex',
        textAlign: 'left',
        width: '100%'
    }
});
