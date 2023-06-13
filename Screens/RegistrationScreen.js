import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useFonts } from "expo-font";

export default function RegistrationScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.form}>
      <View style={styles.imageWrap}></View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          //  value={value}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
          maxLength={35}
        />
        <TextInput
          style={styles.input}
          //  value={value}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
          maxLength={35}
        />
        <TextInput
          style={styles.input}
          //  value={value}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
          maxLength={35}
        />
      </View>
      <Button title="Зареєстуватися" />
      <Text style={styles.link}>Вже є акаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    position: "relative",
    height: 489,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  imageWrap: {
    position: "absolute",
    top: -60,
    left: 130,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 33,
    letterSpacing: 0.72,
  },
  inputWrap: {
    gap: 16,
    marginBottom: 43,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#212121",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  link: {
    textAlign: 'center',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    marginTop: 16,
  }
});
