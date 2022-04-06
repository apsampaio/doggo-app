import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../global/colors";

type Props = {
  style?: StyleProp<ViewStyle>;
};

const GoBackButton: React.FC<Props> = ({ style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.6}>
      <Feather name="arrow-left" size={24} color={colors.white} />
      <Text style={styles.title}>Voltar</Text>
    </TouchableOpacity>
  );
};

export { GoBackButton };
