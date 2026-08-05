import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/onBoarding/onboarding.jsx";
import Login from "../screens/login/login.jsx";
import CreateAccount from "../screens/create-account/create-account.jsx";

const Stack = createNativeStackNavigator();
function RoutesOpen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}

export default RoutesOpen;
