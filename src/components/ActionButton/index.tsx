import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  color: string;
};

const ActionButton: React.FC<Props> = ({ title, color }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      activeOpacity={0.6}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ActionButton };
