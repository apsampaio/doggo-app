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
            <Card
              address="Av. Dom Aguirre, 2121 - Santa Rosália"
              city="Sorocaba - SP"
              image="https://atacama.ind.br/wp-content/uploads/2016/03/como-montar-um-pet-shop1.jpg"
              name="Petz"
              score={4}
            />
            <Card
              address="R. Olávo Bilac, 190 - Vila Santana"
              city="Sorocaba - SP"
              image="https://petmaniaoficial.com.br/wp-content/uploads/2021/02/veterinario-em-petshop.jpg"
              name="Águia de Ouro"
              score={4}
            />
            <Card
              address="R. Paes de Linhares, 383 - Vila Fiori"
              city="Sorocaba - SP"
              image="https://studybreaks.com/wp-content/uploads/2017/12/image-3-e1512589034578.jpg"
              name="Pet Central"
              score={4}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { Search };
