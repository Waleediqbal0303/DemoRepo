
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; //latest
import axios from "axios";


async function authHeader() {
  let token =  await AsyncStorage.getItem('token');
  if (token) {
    return { 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}

export {authHeader};


