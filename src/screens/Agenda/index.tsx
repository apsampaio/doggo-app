import { ScrollView, View, Text, Image } from "react-native";

import { GoBackButton } from "../../components/GoBackButton";
import { CalendarComponent } from "../../components/Calendar";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { styles, headerStyles } from "./styles";
import { colors } from "../../global/colors";

type HeaderProps = {
  image: string;
  name: string;
  address: string;
  city: string;
  score: number;
};

const Header: React.FC<HeaderProps> = ({
  image,
  name,
  address,
  city,
  score,
}) => {
  const stars = Array.from(Array(score).keys());

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.titles}>
        <Text style={headerStyles.title} ellipsizeMode="tail" numberOfLines={1}>
          {name}
        </Text>
        <Text
          style={headerStyles.subtitle}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {address}
        </Text>
        <Text
          style={headerStyles.subtitle}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {city}
        </Text>
      </View>
      <View style={headerStyles.footer}>
        <Image
          style={headerStyles.image}
          source={{
            uri: image,
          }}
        />
        <View style={headerStyles.rating}>
          <Text style={headerStyles.ratingTitle}>AVALIAÇÃO</Text>
          <View style={headerStyles.starContainer}>
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
    </View>
  );
};

const Agenda: React.FC = () => {
  const navigation = useNavigation();

  const data = {
    id: "A",
    address: "Av. Paraná, 3925 - Cajuru",
    city: "Sorocaba - SP",
    image:
      "https://www.eurodicas.com.br/wp-content/uploads/2019/01/pet-shop-em-portugal.jpg",
    name: "Galera Animal Petshop",
    score: 5,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <GoBackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.body}>
        <Header
          address={data.address}
          city={data.city}
          image={data.image}
          name={data.name}
          score={data.score}
          key={data.id}
        />
        <Text style={styles.title}>Escolha a data</Text>
        <CalendarComponent />
      </View>
    </ScrollView>
  );
};

export { Agenda };
