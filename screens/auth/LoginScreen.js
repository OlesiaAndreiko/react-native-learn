import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const initalState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isActivePass, setIsActivePass] = useState(false);
  const [isSecurePass, setIsSecurePass] = useState(true);
  const [userData, setUserData] = useState(initalState);

  const navigation = useNavigation();

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const handleActiveEmail = () => {
    setIsActiveEmail(true);
  };

  const handleBlurEmail = () => {
    setIsActiveEmail(false);
  };

  const handleActivePass = () => {
    setIsActivePass(true);
  };

  const handleBlurPass = () => {
    setIsActivePass(false);
  };

  const handleSecure = () => {
    setIsSecurePass((isSecurePass) => !isSecurePass);
  };

  const handleUser = () => {
    console.log(userData);
    setUserData(initalState);
    setIsActiveEmail(false);
    setIsActivePass(false);
    Keyboard.dismiss();
    navigation.navigate("Home", {
      screen: 'PostsScreen',
   });
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/image/background.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            keyboardVerticalOffset={120}
          >
            <View style={styles.form}>
              <View style={styles.imageWrap}>
                <TouchableOpacity
                  style={styles.btnAddAvatar}
                  activeOpacity={0.7}
                >
                  <Image
                    source={require("../../assets/image/add-icon.png")}
                    style={styles.addIcon}
                  ></Image>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isActiveEmail ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={userData.email}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  maxLength={35}
                  onFocus={handleActiveEmail}
                  onBlur={handleBlurEmail}
                  onChangeText={(value) =>
                    setUserData((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <View style={styles.passWrap}>
                  <TextInput
                    style={{
                      ...styles.inputPass,
                      borderColor: isActivePass ? "#FF6C00" : "#E8E8E8",
                    }}
                    value={userData.password}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={isSecurePass}
                    maxLength={35}
                    onFocus={handleActivePass}
                    onBlur={handleBlurPass}
                    onChangeText={(value) =>
                      setUserData((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    style={styles.btnShowPass}
                    activeOpacity={0.7}
                    onPress={handleSecure}
                  >
                    <Text style={styles.btnShowPassTitle}>Показати</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleUser}
              >
                <Text style={styles.buttonTitle}>Увійти</Text>
              </TouchableOpacity>
              <View style={styles.linkWrap}>
                <Text style={styles.linkText}>Немає акаунту?</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Registration")}>
                  <Text style={styles.link}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover ",
    justifyContent: "flex-end",
  },
  form: {
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
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
