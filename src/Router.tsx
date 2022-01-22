import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import DemoScreen from "./Screens/DemoScreen/DemoScreen";

const width = Dimensions.get("screen").width;
const Stack = createStackNavigator();

// using provider design pattern where data flow between components based on redux somehwere inside we can use context apis 

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" >
          <Stack.Screen name="DemoScreen" component={DemoScreen} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )};

export default Router;


