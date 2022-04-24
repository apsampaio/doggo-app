import {
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { colors } from "../../global/colors";

import { styles } from "./styles";

type Props = {
  name: string;
  selected: boolean;
  action: (name: string) => void;
  chipContainer?: StyleProp<ViewStyle>;
  chipText?: StyleProp<TextStyle>;
};

const Chip: React.FC<Props> = ({
  name,
  selected,
  action,
  chipContainer,
  chipText,
}) => {
  const handlePress = () => {
    action(name);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        {
          backgroundColor: selected ? colors.orange : colors.purple,
        },
        chipContainer,
      ]}
      activeOpacity={0.6}
    >
      <Text
        style={[
          styles.title,
          {
            color: selected ? colors.black : colors.white,
          },
          chipText,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export { Chip };
