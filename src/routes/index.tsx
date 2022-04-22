import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Landing } from "../screens/Landing";
import { Login } from "../screens/Login";
import { RegisterInfo } from "../screens/RegisterInfo";
import { RegisterLocation } from "../screens/RegisterLocation";
import { RegisterComplete } from "../screens/RegisterComplete";
import { Search } from "../screens/Search";
import { Agenda } from "../screens/Agenda";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Lading"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Lading" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterInfo" component={RegisterInfo} />
        <Stack.Screen name="RegisterLocation" component={RegisterLocation} />
        <Stack.Screen name="RegisterComplete" component={RegisterComplete} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Agenda" component={Agenda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
