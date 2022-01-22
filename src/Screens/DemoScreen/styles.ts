import { StyleSheet } from 'react-native';
import {baseStyles, COLORS} from '../../Res';
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
      },

      greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
      }
});
