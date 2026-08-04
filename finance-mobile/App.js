import { ActivityIndicator, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Onboarding from "./src/screens/onBoarding/onboarding.jsx";
import Login from "./src/screens/login/login.jsx";
import CreateAccount from "./src/screens/create-account/create-account.jsx";
import Home from "./src/screens/home/home.jsx";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return fontsLoaded ? <Home /> : <ActivityIndicator />;
}
