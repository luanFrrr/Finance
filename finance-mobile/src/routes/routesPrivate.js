import { COLORS } from "../constants/theme.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/home.jsx";
import Lancamentos from "../screens/lancamentos/lancamentos.jsx";
import Categorias from "../screens/categorias/categorias.jsx";
import Perfil from "../screens/perfil/perfil.jsx";
import icons from "../constants/icons.js";
import { Image, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{
          headerTitle: "Categorias",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.primary4,
        }}
      />

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
        name="Perfil"
        component={Perfil}
        options={{
          headerTitle: "Editar Perfil",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.primary4,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesPrivate;
