import  axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; //latest
import { authHeader } from '../../src/Res';


async function getApiCall(url:string) {
  return new Promise(async(resolve:any, reject:any )=>{
    try{
      let response = await axios.get(url, { headers: authHeader() });
      if(response?.status==200){
        resolve(response)
      }
      else{
        reject(response)
      }
    }
    catch(e){
      reject(e)
    }
  });
}

export default  {getApiCall};
  
