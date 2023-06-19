import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons'; 

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Home from "./screens/user/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
       <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ 
            title: "Публікації",
            headerTitleAlign: "center",
            headerTintColor: "#212121",   
            headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            fontFamily: "Roboto-Medium",
            letterSpacing: -0.41,
            textAlign: "center",
          },
            headerLeft: null,
            headerRight: () => (<Feather name="log-out" size={24} color="#BDBDBD" marginRight={15}/>),                 
        }}
          name="Home"
          component={Home}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}