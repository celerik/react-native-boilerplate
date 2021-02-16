// @packages
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Saves an object with a key inside
 * the device storage
 * @param {object} value
 * @param {string} key
 */
export const storeData = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value);
        const result = await AsyncStorage.setItem(key, jsonValue);
        return result;
    } catch (e) {
        return e;
    }
};

/**
 * Gets the value storaged given a key.
 * @param {string} key
 */
export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return JSON.parse(jsonValue);
    } catch (e) {
        return e;
    }
};

/**
 * Remove an item from the async storage given a key
 * @param {string} key
 */
export const removeData = async (key) => {
    try {
        const result = await AsyncStorage.removeItem(key);
        return result;
    } catch (e) {
        return e;
    }
};
