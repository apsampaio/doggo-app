import AppLoading from "expo-app-loading";
import { Landing } from "./src/screens/Landing";
import { Login } from "./src/screens/Login";
import { RegisterInfo } from "./src/screens/RegisterInfo";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RegisterInfo />;
}
