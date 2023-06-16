import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

return (
<>
{/* <RegistrationScreen/> */}
<LoginScreen/>
</>
)}

