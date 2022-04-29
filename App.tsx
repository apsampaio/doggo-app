import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar translucent />
      <Routes />
    </>
  );
}
