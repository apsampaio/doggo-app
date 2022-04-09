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

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { colors } from "../../global/colors";

const Login: React.FC = () => {
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
            <GoBackButton onPress={() => navigation.goBack()} />
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterInfo")}
            >
              <Text style={[styles.textSimple, { color: colors.white }]}>
                Criar uma conta
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>Fazer login</Text>
            <Input name="email" placeholder="E-mail" key="email" icon="mail" />
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

          <ActionButton
            color={colors.purple}
            title="Entrar"
            style={{ alignSelf: "center" }}
            onPress={() => navigation.navigate("Search")}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { Login };
