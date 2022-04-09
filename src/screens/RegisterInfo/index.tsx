import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { ActionButton } from "../../components/ActionButton";
import { Input } from "../../components/Input";
import { GoBackButton } from "../../components/GoBackButton";
import { RegisterStep } from "../../components/RegisterStep";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { colors } from "../../global/colors";

const RegisterInfo: React.FC = () => {
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
            <RegisterStep step={1} />
            <GoBackButton onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>Criar uma conta</Text>
            <Input
              name="name"
              placeholder="Nome completo"
              key="name"
              icon="user"
            />
            <Input name="CPF" placeholder="CPF" key="cpf" icon="credit-card" />
            <Input
              name="cellphone"
              placeholder="Telefone pessoal"
              key="cellphone"
              icon="phone"
            />
            <Input name="mail" placeholder="E-mail" key="mail" icon="mail" />
            <Input
              name="password"
              placeholder="Senha"
              key="password"
              icon="lock"
            />
            <Input
              name="confirmation"
              placeholder="Confirmação de senha"
              key="confirmation"
              icon="lock"
            />
            <ActionButton
              color={colors.purple}
              title="Próximo"
              style={{ marginTop: 36, alignSelf: "center" }}
              onPress={() => navigation.navigate("RegisterLocation")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { RegisterInfo };
