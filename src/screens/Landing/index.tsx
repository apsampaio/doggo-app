import { View, Image, Text } from "react-native";

import TitleImage from "../../assets/Title.svg";
import DogLandingImage from "../../assets/DogLanding.svg";

import { ActionButton } from "../../components/ActionButton";

import { colors } from "../../global/colors";
import { styles } from "./styles";

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <TitleImage style={styles.image} />
      <DogLandingImage style={styles.image} />
      <Text style={styles.title}>O que deseja fazer?</Text>
      <ActionButton title="Buscar Pet Shop" color={colors.purple} />
      <ActionButton title="Meu Pet Shop" color={colors.orange} />
    </View>
  );
};

export { Landing };
