import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Keyboard, TouchableWithoutFeedback} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useState } from "react";

export default function App() {

  handleKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
    <View style={styles.container}>    

      <ImageBackground
        source={require("./assets/image/background.jpg")}
        style={styles.image}
      >

      <RegistrationScreen></RegistrationScreen>
      {/* <LoginScreen></LoginScreen> */}
        
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover ",
    justifyContent: "flex-end",
    // justifyContent: "center",
  },
});
