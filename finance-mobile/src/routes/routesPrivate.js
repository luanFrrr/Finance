import { COLORS } from "../constants/theme.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/home.jsx";
import Lancamentos from "../screens/lancamentos/lancamentos.jsx";

const Stack = createNativeStackNavigator();
function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lancamentos"
        component={Lancamentos}
        options={{
          headerTitle: "Lançamentos",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.primary4,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RoutesPrivate;
