import { StyleSheet } from 'react-native';
import {baseStyles, COLORS} from '../../../Res';
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
    container: {
        zIndex: 10, // for ios
        height: 80,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.grey,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 5,
          width: 0
        },
        elevation: 5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15
      },
  
      middleView: {
          flex:1, 
          justifyContent:"center",
          alignItems:"center"
        },
  
      title: {
          ...baseStyles.bold,
          fontSize: 16,
          color: COLORS.black,
          marginTop:5
        },
        iconStyles:{
          justifyContent:"center",
          alignSelf:"center"
        }
});
