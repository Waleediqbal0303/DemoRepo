import { StyleSheet, I18nManager, Platform } from 'react-native';
import { baseStyles, COLORS } from '../../../Res';

export default StyleSheet.create({
    boxView:{
        alignItems:"center", 
        flexDirection:"row",
        marginTop:10,
        marginHorizontal:20,
    },
    inBoxView:{
        flex:1,
        // backgroundColor:COLORS.btnYellow,
        borderColor:COLORS.black,
        borderWidth:1,
        borderRadius:10,
        paddingVertical:Platform.OS=="ios"?10: 10,
    },
    flexJustRow:{
        flexDirection:"row"
    },
    nameHead: {
        fontSize: 14,
        marginLeft:I18nManager.isRTL ? 20 : 20,
        ...baseStyles.bold,
        color:COLORS.black,
        textAlign:"left"

    },
    simpleHead: {
        fontSize: 14,
        marginLeft:I18nManager.isRTL ? 20 : 20,
        ...baseStyles.medium,
        color:COLORS.black,
        textAlign:"left"

    },
    simpleBadge: {
        fontSize: 14,
        marginLeft:I18nManager.isRTL ? 45 : 48,
        ...baseStyles.medium,
        color:COLORS.grey,
        textAlign:"left"

    },
    greenishBadge: {
        fontSize: 14,
        marginLeft:I18nManager.isRTL ? 45 : 48,
        ...baseStyles.medium,
        color:COLORS.greenishShade,
        textAlign:"left"

    },
    simpleTxt: {
        fontSize: 14,
        marginLeft:I18nManager.isRTL ? 45 : 48,
        ...baseStyles.medium,
        color:COLORS.black,
        textAlign:"left"

    },
    mainView:{
        flex:1,
        justifyContent:"center"
    },
    nameTxt: {
        fontSize: 14,
        marginLeft:I18nManager.isRTL ? 45 : 48,
        ...baseStyles.medium,
        color:COLORS.black,
        textAlign:"left"

    }
});

