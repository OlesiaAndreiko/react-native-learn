import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
// import { useFonts } from 'expo-font';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/image/background.jpg")}
        style={styles.image}
      >
        <RegistrationScreen></RegistrationScreen>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
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
  },
});
