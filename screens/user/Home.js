// import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import DefaultScreen from "../nested/DefaultScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
  return (
    <MainTab.Navigator
    initialRouteName="PostsScreen"
    screenOptions={{ 
      tabBarStyle: { 
        paddingLeft:80,
        paddingRight:80,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#FFFFFF",
      tabBarActiveBackgroundColor: "#FF6C00",
      tabBarItemStyle: {
        height: 40,
        borderRadius: 20,
        marginTop: 4,
    }, 
    }}
    >
      <MainTab.Screen
      name="PostsScreen"
      component={PostsScreen}
      options={{
        headerShown: false,
        tabBarLabel:"PostsScreen",
        tabBarIcon: ({size, color}) => (<Feather name="grid" size={size} color={color} />),
      }}      
      />
      <MainTab.Screen
      name="CreatePostsScreen"
      component={CreatePostsScreen}
      options={{
        headerShown: false,
        tabBarLabel:"CreatePostsScreen",
        tabBarIcon: ({size, color}) => (<Ionicons name="add" size={size} color={color} />),
      }}      
      />
      <MainTab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel:"ProfileScreen",
        tabBarIcon: ({size, color}) => (<Feather name="user" size={size} color={color} />),
      }}      
      />
    </MainTab.Navigator>
  )
};