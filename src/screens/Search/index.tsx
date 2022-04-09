import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { colors } from "../../global/colors";

const Search: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.title}>
              DOG<Text style={styles.yellow}>GO</Text>
            </Text>
            <TouchableOpacity
              style={styles.profile}
              //   onPress={() => navigation.navigate("RegisterInfo")}
            >
              <FontAwesome5 name="user-alt" size={18} color={colors.orange} />
              <Text style={styles.textSimple}>Perfil</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { Search };
