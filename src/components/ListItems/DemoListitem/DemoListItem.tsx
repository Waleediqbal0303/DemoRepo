import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {COLORS, TEXTS } from '../../../Res';




const DemoListItem = (props:any) => {
    let item = props?.dataItem?.item;
    return(
        <TouchableWithoutFeedback onPress={()=>props?.onPress(item)}>
            <View  style={styles.boxView}>
                <LinearGradient colors={['#FDFDFD', '#F4F4F4']} style={styles.inBoxView} >
                    <View style={styles.flexJustRow}>
                        <View style={styles.mainView}>
                            <Text style={[styles.nameHead]} numberOfLines={2}>{TEXTS?.DLI?.todo} <Text style={styles.nameTxt}>{item?.toDo}</Text></Text>
                            <Text style={[styles.simpleHead]} numberOfLines={2}>{TEXTS?.DLI?.status} <Text style={item?.status?.toLowerCase()=='working'? styles.simpleBadge:styles.greenishBadge}>{item?.status}</Text></Text>
                            <Text style={[styles.simpleHead]} numberOfLines={2}>{TEXTS?.DLI?.time} <Text style={styles.simpleTxt}>{item?.dateTime}</Text></Text>
                        </View>
                    </View>
                </LinearGradient> 
            </View>
        </TouchableWithoutFeedback>
    )
}

export default React.memo(DemoListItem);



