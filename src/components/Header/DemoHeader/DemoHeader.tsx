import React from "react";
import {
  Text,
  View,
  I18nManager,
  TouchableOpacity,
  StatusBar
} from "react-native";
import {COLORS, baseStyles} from "../../../Res";
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const DemoHeader = (props:any) => {
  // console.log("header called")
  return (
    <View style={{ ...styles.container, ...props.containerStyle }}>
        <StatusBar barStyle={'default'}  backgroundColor={COLORS.white} hidden={props?.hide?true:false}/>
        <TouchableOpacity onPress={props?.onPress} style={styles.iconStyles} >
            <FontAwesome size={30} name={'angle-left'} color={COLORS.black}/>
        </TouchableOpacity>
        <View style={styles.middleView}>
            <Text style={{ ...styles.title, ...props.titleStyle }}>
                {props?.title}
            </Text>
        </View>
        <View />
    </View>
    )};

    export default React.memo(DemoHeader);


  