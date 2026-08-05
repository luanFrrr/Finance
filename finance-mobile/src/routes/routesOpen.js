import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/onBoarding/onboarding.jsx";
import Login from "../screens/login/login.jsx";
import CreateAccount from "../screens/create-account/create-account.jsx";

const Stack = createNativeStackNavigator();
function RoutesOpen() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen
          name="createAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default RoutesOpen;
