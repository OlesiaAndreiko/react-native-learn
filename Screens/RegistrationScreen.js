import { StyleSheet, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function RegistrationScreen() {
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }
    

  return (
      <TextInput style={styles.input}
        //  value={value}
         placeholder="Логін"
         placeholderTextColor="#BDBDBD"
         maxLength={35}
     />
   
  );
}

const styles = StyleSheet.create({
//   form: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  input: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    color: "#212121",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  }
});