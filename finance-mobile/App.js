import { ActivityIndicator, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Routes from "./src/routes/routes.js";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return fontsLoaded ? (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  ) : (
    <ActivityIndicator />
  );
}
