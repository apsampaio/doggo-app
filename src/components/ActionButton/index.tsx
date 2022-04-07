import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  color: string;
  style?: StyleProp<ViewStyle>;
};

const ActionButton: React.FC<Props & TouchableOpacityProps> = ({
  title,
  color,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }, style]}
      activeOpacity={0.6}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ActionButton };
