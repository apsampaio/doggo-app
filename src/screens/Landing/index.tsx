import { Text, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

import TitleImage from "../../assets/Title.svg";
import DogLandingImage from "../../assets/DogLanding.svg";

import { ActionButton } from "../../components/ActionButton";

import { colors } from "../../global/colors";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

const Landing: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TitleImage style={styles.image} />
        <DogLandingImage style={styles.image} />
        <Text style={styles.title}>O que deseja fazer?</Text>
        <ActionButton
          title="Buscar Pet Shop"
          color={colors.purple}
          onPress={() => navigation.navigate("Login")}
        />
        <ActionButton title="Meu Pet Shop" color={colors.orange} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { Landing };
