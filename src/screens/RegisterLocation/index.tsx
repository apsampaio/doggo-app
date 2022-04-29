import { useEffect, useState } from "react";

import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

import { ActionButton } from "../../components/ActionButton";
import { GoBackButton } from "../../components/GoBackButton";
import { RegisterStep } from "../../components/RegisterStep";

import { styles } from "./styles";
import { colors } from "../../global/colors";

import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const RegisterLocation: React.FC = () => {
  const navigation = useNavigation();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0, 0,
  ]);

  const [locationStatus, setLocationStatus] = useState("");
  const [points, setPoints] = useState<[number, number]>([0, 0]);
  const [loading, setLoading] = useState(false);

  async function loadPosition() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationStatus(status);

    if (status !== "granted") {
      Alert.alert(
        "Opa!",
        "Precisamos de sua permissão apra obter a localização."
      );
      return;
    }

    setLoading(true);
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    setInitialPosition([latitude, longitude]);
    setPoints([latitude, longitude]);
    setLoading(false);
  }

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
            <RegisterStep step={2} />
            <GoBackButton onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>Sua localização</Text>

            <ActionButton
              color={colors.green}
              title="Localizar"
              style={styles.button}
              onPress={loadPosition}
              disabled={locationStatus === "granted"}
            />

            {initialPosition[0] !== 0 ? (
              <MapView
                style={styles.map}
                loadingEnabled={initialPosition[0] === 0}
                initialRegion={{
                  latitude: initialPosition[0],
                  longitude: initialPosition[1],
                  latitudeDelta: 0.014,
                  longitudeDelta: 0.014,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: points[0],
                    longitude: points[1],
                  }}
                />
              </MapView>
            ) : (
              <View style={styles.map}>
                <ActivityIndicator color={colors.purple} size="large" />
              </View>
            )}
            <View style={styles.mapBox}></View>

            <ActionButton
              color={colors.purple}
              title="Cadastrar"
              style={{ marginTop: 36, alignSelf: "center" }}
              onPress={() => navigation.navigate("RegisterComplete")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export { RegisterLocation };
