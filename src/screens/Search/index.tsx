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

import { Card } from "../../components/Card";

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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>DOG</Text>
              <Text style={styles.yellow}>GO</Text>
            </View>
            <TouchableOpacity
              style={styles.profile}
              //   onPress={() => navigation.navigate("RegisterInfo")}
            >
              <FontAwesome5 name="user-alt" size={18} color={colors.orange} />
              <Text style={styles.textSimple}>Perfil</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Card
              address="Av. Paraná, 3925 - Cajuru"
              city="Sorocaba - SP"
              image="https://www.eurodicas.com.br/wp-content/uploads/2019/01/pet-shop-em-portugal.jpg"
              name="Galera Animal Petshop"
              score={5}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { Search };
