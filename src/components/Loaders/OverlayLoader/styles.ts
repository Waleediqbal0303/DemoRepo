import { StyleSheet } from 'react-native';
import {baseStyles, COLORS} from '../../../Res';
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
   indicator:{ 
       alignSelf: 'center', 
       top: '50%' 
    },
    loader:{ 
        backgroundColor: 'rgba(29,43,73,0.2)', 
        position: 'absolute', 
        width: responsiveWidth(100), 
        height: responsiveHeight(100), 
        zIndex: 5 
    }
});
