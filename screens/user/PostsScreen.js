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
      <NestedStack.Screen name="Comments" component={CommentsScreen}/>
      <NestedStack.Screen name="Map" component={MapScreen} />
    </NestedStack.Navigator>
  );
}


