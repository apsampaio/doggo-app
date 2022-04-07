import { View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import { colors } from "../../global/colors";
import { styles } from "./styles";

type StepProps = {
  step: number;
};

const RegisterStep: React.FC<StepProps> = ({ step }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: step == 2 ? colors.green : colors.white,
          },
        ]}
      >
        <Feather
          name="user"
          color={step == 2 ? colors.white : colors.purple}
          size={24}
        />
      </View>
      <View
        style={[
          styles.smallCircle,
          { backgroundColor: step == 2 ? colors.green : colors.white },
        ]}
      />
      <View
        style={[
          styles.smallCircle,
          { backgroundColor: step == 2 ? colors.green : colors.white },
        ]}
      />
      <View
        style={[
          styles.smallCircle,
          { backgroundColor: step == 2 ? colors.green : colors.white },
        ]}
      />
      <View style={styles.circle}>
        <Feather
          name="map"
          color={step == 2 ? colors.purple : colors.darkGrey}
          size={24}
        />
      </View>
    </View>
  );
};

export { RegisterStep };
