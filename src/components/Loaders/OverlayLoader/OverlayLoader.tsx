import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {baseStyles, COLORS} from '../../../Res';
import styles from './styles';

const OverlayLoader = (props:any) => 
    {

        return(
                props?.isVisible&&
                
                <View style={styles.loader}>
                    <ActivityIndicator size={props.size?props.size:"small"}
                        color={props.color?props?.color:COLORS.black} 
                        style={styles.indicator} 
                    />
                </View>
        )
    }

export  default React.memo(OverlayLoader);