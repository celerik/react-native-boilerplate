import Snackbar from 'react-native-snackbar';

/**
 * This function shows a snackbar pop up.
 * @param {object} param
 */
export const showSnackBar = ({
    message,
    actionText = 'UNDO',
    backgroundColor = 'black',
    length = Snackbar.LENGTH_SHORT,
    numberOfLines = 2,
    onPress = Function.prototype,
    textColor = 'white',
    textColorAction = 'green'
}) => Snackbar.show({
    action: {
        onPress,
        text: actionText,
        textColor: textColorAction
    },
    backgroundColor,
    duration: length,
    numberOfLines,
    text: message,
    textColor
});
