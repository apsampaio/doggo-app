import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  color: string;
  style?: StyleProp<ViewStyle>;
};

const ActionButton: React.FC<Props> = ({ title, color, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }, style]}
      activeOpacity={0.6}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ActionButton };
