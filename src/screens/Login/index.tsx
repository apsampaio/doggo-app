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

import { styles } from "./styles";
import { colors } from "../../global/colors";

const Login: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}></View>
          <View style={styles.container}>
            <View style={styles.body}>
              <Text style={styles.title}>Fazer login</Text>
              <Input
                name="email"
                placeholder="E-mail"
                key="email"
                icon="mail"
              />
              <Input
                name="password"
                placeholder="Senha"
                key="password"
                icon="lock"
                isSecret
              />
              <TouchableOpacity>
                <Text style={[styles.textSimple, { marginTop: 12 }]}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>

            <ActionButton color={colors.purple} title="Entrar"></ActionButton>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.textSimple}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { Login };
