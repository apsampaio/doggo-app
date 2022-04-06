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

import { styles } from "./styles";
import { colors } from "../../global/colors";

const RegisterInfo: React.FC = () => {
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
            <GoBackButton />
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
            ></ActionButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { RegisterInfo };
