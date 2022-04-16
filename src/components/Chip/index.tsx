import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../global/colors";

import { styles } from "./styles";

type Props = {
  name: string;
  selected: boolean;
  action: (name: string) => void;
};

const Chip: React.FC<Props> = ({ name, selected, action }) => {
  const handlePress = () => {
    action(name);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        {
          backgroundColor: selected ? colors.orange : "#FFF",
        },
      ]}
      activeOpacity={0.6}
    >
      <Text
        style={[
          styles.title,
          {
            color: selected ? colors.black : colors.darkGrey,
          },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export { Chip };
