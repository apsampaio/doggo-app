import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ActionButton } from "../../components/ActionButton";

import { styles } from "./styles";
import { colors } from "../../global/colors";

import { useNavigation } from "@react-navigation/native";

const RegisterComplete: React.FC = () => {
  const nav = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Feather
          style={styles.icon}
          size={48}
          color={colors.white}
          name="check-circle"
        />
        <Text style={styles.title}>Cadastro{"\n"}concluído!</Text>
        <Text style={styles.text}>
          Parabéns, agora você tem acesso a plataforma DOG
          <Text style={styles.yellow}>GO</Text>.
        </Text>
        <Text style={styles.text}>
          A qualquer momento você receberá um e-mail para a confirmação dos seus
          dados.
        </Text>

        <ActionButton
          color={colors.white}
          title="Voltar para o início"
          textStyle={{ color: colors.purple }}
          style={styles.button}
          onPress={() => nav.navigate("Login")}
        />
      </View>
    </>
  );
};

export { RegisterComplete };
