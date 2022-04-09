import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../global/colors";

type Props = {
  style?: StyleProp<ViewStyle>;
};

const GoBackButton: React.FC<Props & TouchableOpacityProps> = ({
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.6}
      {...rest}
    >
      <Feather name="arrow-left" size={24} color={colors.white} />
      <Text style={styles.title}>Voltar</Text>
    </TouchableOpacity>
  );
};

export { GoBackButton };
