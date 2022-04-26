import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ActionButton } from "../../components/ActionButton";

import { styles } from "./styles";
import { colors } from "../../global/colors";

import { useNavigation } from "@react-navigation/native";

const AgendaComplete: React.FC = () => {
  const nav = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          size={48}
          color={colors.white}
          name="check-decagram"
        />
        <Text style={styles.title}>Agendamento{"\n"}concluído!</Text>
        <Text style={styles.text}>
          O prestador receberá uma notificação informando sobre seu agendamento
          e logo você receberá uma resposta de confirmação.
        </Text>

        <ActionButton
          color={colors.white}
          title="Voltar para o início"
          textStyle={{ color: colors.purple }}
          style={styles.button}
          onPress={() => nav.navigate("Search")}
        />
      </View>
    </>
  );
};

export { AgendaComplete };
