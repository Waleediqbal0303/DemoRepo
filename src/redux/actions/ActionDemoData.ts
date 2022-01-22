import { SETDATA, SETDATALOADER, SHOWDEMOERROR, SETDATALOADERBOTTOM } from './DeclarationTypes/Services';
import AsyncStorage from '@react-native-async-storage/async-storage'; //latest
import Config from "../../common/Configration";
import {InitializedText} from "../../Res"
import WebApis from  "../../Services/WebApis"
import moment from 'moment';

const getDemoData = (page:any) => async (dispatch:any) => {
    try {
         dispatch({ type: page==1?SETDATALOADER:SETDATALOADERBOTTOM,payload: true});
        // let url = Config?.DummyMainUrl+Config?.DummySubUrl;
        // WebApis.getApiCall(url).then((response:any)=>{ // can make api call here to get data
        //     dispatch({ type: SETDATALOADER, payload: response?.data?.data });

        // })
        // .catch((e:any)=>{
        //     dispatch({ type: SHOWDEMOERROR, payload: e.toString()});
        // })

        //you can get data from api or currently without api max can do this to show all working
        let data: any[] = [];
        for(let i= page==1?page:((page-1)*10)+1; i<=(page==1?10:(page*10)); i++){
            data.push({id:i, toDo:i.toString(), status:i%2==0?'Done':'Working', dateTime:(moment(new Date()).format('YYYY-MM-DD HH:mm:ss')).toString()});
        }
        // setTimeout is for delay just for showing loader otherwise you wont be able to see bottom loader 
        setTimeout(() => {
            dispatch({ type: SETDATA, payload: {list:data, currentPage:page}});
        }, 1000);
    }
    catch (e:any) {
        dispatch({ type: SHOWDEMOERROR, payload: e.toString()});
    }
};


export {
    getDemoData
};