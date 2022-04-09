import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors } from "../../global/colors";

import { styles } from "./styles";

type Props = {
  title: string;
  color: string;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const ActionButton: React.FC<Props & TouchableOpacityProps> = ({
  title,
  color,
  style,
  disabled,
  textStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        { backgroundColor: disabled ? colors.greyTab : color },
      ]}
      activeOpacity={0.6}
      {...rest}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ActionButton };
