import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { colors } from "../../global/colors";

import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  image: string;
  name: string;
  address: string;
  city: string;
  score: number;
};

const Card: React.FC<Props> = ({ address, city, name, image, score }) => {
  const navigation = useNavigation();

  const stars = Array.from(Array(score).keys());

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate("Agenda", {
          address,
          city,
          name,
          image,
          score,
        })
      }
    >
      <ImageBackground
        style={styles.background}
        source={{
          uri: image,
        }}
      />
      <View style={styles.body}>
        <View style={styles.titles}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.subtitle} ellipsizeMode="tail" numberOfLines={1}>
            {address}
          </Text>
          <Text style={styles.subtitle} ellipsizeMode="tail" numberOfLines={1}>
            {city}
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingTitle}>AVALIAÇÃO</Text>
          <View style={styles.starContainer}>
            {stars.map((_, idx) => (
              <AntDesign
                name="star"
                size={18}
                color={colors.yellow}
                key={idx}
              />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { Card };
