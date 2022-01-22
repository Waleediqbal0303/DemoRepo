// import { COLORS, TEXTS, IMAGES, currentTimeStamp} from '../../Res';
import { SETDATA, SETDATALOADER, ADDDEMODATAITEM, DELETEDEMODATAITEM, SHOWDEMOERROR, HIDEDEMOERROR, SETDATALOADERBOTTOM } from '../actions/DeclarationTypes/Services';

const initialState = {
    demoReducer: {
        loader:false, 
        loaderBottom:false, 
        demoData:[],
        currentPage:1,// CAN USE FOR PAGINATION ,
        error:false,
        errorTxt:''
    }
}



const DemoReducer = (state = initialState, action:any) => {
    let data = { ...state };
    const { payload } = action;
    switch (action.type) {
        case SETDATA:
            data['demoReducer'] = {
                ...data.demoReducer,
                demoData: payload?.currentPage==1?payload?.list:[...data.demoReducer?.demoData, ...payload?.list],
                loader:false,
                loaderBottom:false,
                currentPage:payload?.currentPage+1
            };
            break;
        case SETDATALOADER:
            data['demoReducer'] = {
                ...data.demoReducer,
                loader:payload,
            };
            break;
        case ADDDEMODATAITEM:
            let listData:any = data.demoReducer?.demoData;
            if(listData?.length>0){
                listData.push(payload)
            }
            else{
                listData=payload;
            }
            data['demoReducer'] = {
                ...data.demoReducer,
                loader:false,
                demoData:listData
            };
            break;
        case DELETEDEMODATAITEM:
            let remainList = data?.demoReducer?.demoData.filter(function(x) { return x?._id !== payload?._id});
            data['demoReducer'] = {
                ...data.demoReducer,
                loader:false,
                demoData:remainList
            };
            break;

        case SHOWDEMOERROR:
            data['demoReducer'] = {
                ...data.demoReducer,
                error:true,
                errorTxt:payload,
                loader:false,
                loaderBottom:false
            };
            break;

        case HIDEDEMOERROR:
            data['demoReducer'] = {
                ...data.demoReducer,
                error:false,
                errorTxt:'',
            };
            break;
        case SETDATALOADERBOTTOM:
            data['demoReducer'] = {
                ...data.demoReducer,
                loaderBottom:payload,
            };
            break;
        default:
            return state;
    }
    return data;
};

export default DemoReducer;