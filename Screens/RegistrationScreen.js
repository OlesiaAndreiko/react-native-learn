import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

const initalState = {
  login: "",
  email: "",
  password: "",
}

export default function RegistrationScreen() {
  // const [isKeyboard, setIsKeyboard] = useState(false)
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);  
  const [isActivePass, setIsActivePass] = useState(false);
  const [isSecurePass, setIsSecurePass] = useState(true);
  const [userData, setUserData] = useState(initalState);

  const keyboardHide = () => {
    Keyboard.dismiss();
    // setIsKeyboard(false)
  };

  const handleActiveLogin = () => {setIsActiveLogin(true)}

  const handleBlurLogin = () => {setIsActiveLogin(false)}

  const handleActiveEmail = () => {
    setIsActiveEmail(true)
    // setIsKeyboard(true)
  }

  const handleBlurEmail = () => {
    setIsActiveEmail(false)
    // setIsKeyboard(isKeyboard => !isKeyboard)
  }

  const handleActivePass = () => {setIsActivePass(true)}

  const handleBlurPass = () => {setIsActivePass(false)}

  const handleSecure = () => {setIsSecurePass(isSecurePass => !isSecurePass)}
 
  const handleUser = () => {
    console.log(userData)
    setUserData(initalState);
    setIsActiveLogin(false)
    setIsActiveEmail(false)
    setIsActivePass(false)
    Keyboard.dismiss();
  }

  // console.log(Platform.OS)
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{...styles.form, marginTop: isKeyboard ? -350 : 0}}>      */}
      <View style={styles.form}> 
        <View style={styles.imageWrap}>
          <TouchableOpacity style={styles.btnAddAvatar} activeOpacity={0.7}>
            <Image
              source={require("../assets/image/add-icon.png")}
              style={styles.addIcon}
            ></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputWrap}>
          <TextInput
            style={{...styles.input, borderColor: isActiveLogin ? "#FF6C00" : "#E8E8E8"}}
            value={userData.login}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            maxLength={35}            
            onFocus={handleActiveLogin}
            onBlur={handleBlurLogin}
            onChangeText={(value) => setUserData((prevState)=> ({...prevState, login: value}))}
          />
          <TextInput
            style={{...styles.input, borderColor: isActiveEmail ? "#FF6C00" : "#E8E8E8"}}
            value={userData.email}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            maxLength={35}
            onFocus={handleActiveEmail}
            onBlur={handleBlurEmail}
            onChangeText={(value) => setUserData((prevState)=> ({...prevState, email: value}))}
          />
          <View style={styles.passWrap}>
            <TextInput
              style={{...styles.inputPass, borderColor: isActivePass ? "#FF6C00" : "#E8E8E8"}}
              value={userData.password}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={isSecurePass}
              maxLength={35}
              onFocus={handleActivePass}
              onBlur={handleBlurPass}
              onChangeText={(value) => setUserData((prevState)=> ({...prevState, password: value}))}
            />
            <TouchableOpacity style={styles.btnShowPass} activeOpacity={0.7} onPress={handleSecure}>
              <Text style={styles.btnShowPassTitle}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleUser}
        >
          <Text style={styles.buttonTitle}>Зареєстуватися</Text>
        </TouchableOpacity>
        <View style={styles.linkWrap}>
          <Text style={styles.linkText}>Вже є акаунт?</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.link}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    height: 489,
    // paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    // paddingBottom: 66
  },
  imageWrap: {
    position: "relative",
    top: "-12.5%",
    left: "33%",
    // position: "absolute",
    // top: "-15%",
    // left: "35%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  btnAddAvatar: {
    position: "relative",
    top: "65%",
    left: "90%",
  },
  addIcon: {
    width: 25,
    height: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: -42,
    marginBottom: 33,
    letterSpacing: 0.72,
    color: "#212121",
  },
  inputWrap: {
    gap: 16,
    marginBottom: 27,
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#212121",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  inputPass: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#212121",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  btnShowPass: {
    // position: "absolute",
    // top: 149,
    // left: 275,
    position: "relative",
    top: "-50%",
    right: "-75%",
  },
  btnShowPassTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginHorizontal: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#FF6C00",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: Platform.OS === "ios" ? "#FF6C00" : "#FFFFFF",
  },
  linkWrap: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  linkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textDecorationLine: "underline",
  },
});
