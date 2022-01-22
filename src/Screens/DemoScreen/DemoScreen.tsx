import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import {FlatList, BackHandler, Alert,  } from 'react-native';
import styles from "./styles";
import OverlayLoader  from '../../components/Loaders/OverlayLoader/OverlayLoader';
import BottomLoader  from '../../components/Loaders/BottomLoader/BottomLoader';
import DemoHeader from '../../components/Header/DemoHeader/DemoHeader';
import DemoListItem from "../../components/ListItems/DemoListitem/DemoListItem";
import {TEXTS}  from '../../Res';
import { connect } from "react-redux";
import {getDemoData} from "../../redux/actions/ActionDemoData"
import { SafeAreaView } from 'react-native-safe-area-context';

const DemoScreen= (props:any) => {

  const [refreshing, setRefreshing] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backPressed);
      fetchData();
      return ()=>{
          BackHandler?.removeEventListener('hardwareBackPress', backPressed);
      };
    }, [props?.navigation])
  );

  const backPressed = () => {
    Alert.alert(
      TEXTS?.DS?.BHandler_Title,
      TEXTS?.DS?.BHandler_Text,
      [
        {
          text: TEXTS?.DS?.BHandler_Cancel_Text,
          onPress: () => {},
        },
        { text: TEXTS?.DS?.BHandler_OK_Text, onPress: () => {BackHandler.exitApp()} }
      ]
    );
    return true;
  }

  // useEffect(()=>{
  //   console.log("props?.demoData", props?.demoReducer);  //we can use it to see updated list value in console 
  // }, [props?.demoReducer?.demoData]);

  const fetchData=()=>{
    setRefreshing(false);
    props?.getDemoDataList(1); // always have current page 1
  }
  const loadMore=()=>{
    props?.getDemoDataList(props?.demoReducer?.currentPage);  //for pagination getting current page value from  DemoReducer
  }

  // const memorizedItemClicked = useCallback((data:any)=>{
  //   console.log("data", data?.id)
  // }, []);  //this is to minimize componenet rerendering

  const itemClicked = (data:{})=>{
    setRefreshing(!refreshing) 
  } 

  return (
    <SafeAreaView style={styles.container}>
        <DemoHeader title={TEXTS?.DS?.headTitle} hide={true} onPress={backPressed}/>
        <OverlayLoader isVisible={props?.demoReducer?.loader}/>      
        <FlatList
          onEndReached={({ distanceFromEnd }) => {
              if (distanceFromEnd < 0||props?.demoReducer?.loaderBottom) return;
              loadMore();
          }}
          onRefresh={fetchData}
          refreshing={refreshing}
          data={props?.demoReducer?.demoData}
          initialNumToRender={10}
          onEndReachedThreshold={0.05}
          scrollEventThrottle={400}
          keyExtractor={ (item, index) => `${item?.id}`}
          renderItem={(item)=>
            <DemoListItem
              dataItem={item}
              onPress={itemClicked} 
            />
          }
          ListFooterComponent={<BottomLoader isVisible={props?.demoReducer?.loaderBottom}/> }
        />
    </SafeAreaView>
  );
};

const mapStateToProps = (demoProps:any ) => ({
  demoReducer:demoProps?.DemoReducer?.demoReducer
});

const mapDispatchToProps = (dispatch:any) => ({
  getDemoDataList: (params:any) => dispatch(getDemoData(params)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoScreen);
