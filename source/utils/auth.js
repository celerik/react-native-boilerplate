//@packages
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Saves an object with a key inside
 * the device storage
 * @param {object} value
 * @param {string} key
 */
export const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    const response = await AsyncStorage.setItem(key, jsonValue);
    return response;
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
    return jsonValue;
  } catch (e) {
    return e;
  }
};
