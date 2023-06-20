import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreen from "../nested/DefaultScreen";
import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";


const NestedStack = createStackNavigator();

export default function PostsScreen() {


  return (
    <NestedStack.Navigator >
      <NestedStack.Screen name="DefaultScreen" component={DefaultScreen} options={{headerShown: false,}}/>
      <NestedStack.Screen 
       options={{
        title: "Коментарі",
        headerTintColor: "#1B4371",  
        headerTitleStyle: {
          fontSize: 17,
          lineHeight: 22,
          fontFamily: "Roboto-Medium",
          letterSpacing: -0.41,
        }
      }}
      name="Comments" component={CommentsScreen}/>
      <NestedStack.Screen 
      options={{
        title: "Карта",
        headerTintColor: "#1B4371",  
        headerTitleStyle: {
          fontSize: 17,
          lineHeight: 22,
          fontFamily: "Roboto-Medium",
          letterSpacing: -0.41,
        }
      }}
      name="Map" component={MapScreen} />
    </NestedStack.Navigator>
  );
}


