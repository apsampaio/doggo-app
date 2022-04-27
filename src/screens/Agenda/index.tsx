import { useState } from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";

import { GoBackButton } from "../../components/GoBackButton";
import { CalendarComponent } from "../../components/Calendar";
import { Chip } from "../../components/Chip";
import { ActionButton } from "../../components/ActionButton";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { styles, headerStyles } from "./styles";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";
import { Picker } from "@react-native-picker/picker";

type HeaderProps = {
  image: string;
  name: string;
  address: string;
  city: string;
  score: number;
};

type AgendaProps = {
  route: {
    params: {
      id: string;
      address: string;
      city: string;
      image: string;
      name: string;
      score: number;
    };
  };
};

type Dogs = "Chico" | "Bento" | "Mary" | "invalid";

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

const TimeList: React.FC = () => {
  const [timeSelected, setTimeSelected] = useState("");

  const handleFilter = (name: string) => {
    if (timeSelected === name) {
      setTimeSelected("");
    } else {
      setTimeSelected(name);
    }
  };

  const morning = ["08:00", "09:00", "11:30"];
  const afternoon = ["12:00", "13:30", "14:00", "15:00", "17:30"];
  const evening = ["19:00", "19:30"];

  return (
    <>
      <Text style={styles.subtitle}>Manhã</Text>
      <FlatList
        data={morning}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 8,
        }}
        renderItem={({ item, index }) => (
          <Chip
            action={handleFilter}
            name={item}
            selected={timeSelected === item}
            key={index}
            chipContainer={{
              width: 55,
              borderRadius: 4,
            }}
            chipText={{
              fontFamily: fonts.semiBold,
              fontSize: 14,
            }}
          />
        )}
      />

      <Text style={styles.subtitle}>Tarde</Text>
      <FlatList
        data={afternoon}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 8,
        }}
        renderItem={({ item, index }) => (
          <Chip
            action={handleFilter}
            name={item}
            selected={timeSelected === item}
            key={index}
            chipContainer={{
              width: 55,
              borderRadius: 4,
            }}
            chipText={{
              fontFamily: fonts.semiBold,
              fontSize: 14,
            }}
          />
        )}
      />

      <Text style={styles.subtitle}>Noite</Text>
      <FlatList
        data={evening}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 8,
        }}
        renderItem={({ item, index }) => (
          <Chip
            action={handleFilter}
            name={item}
            selected={timeSelected === item}
            key={index}
            chipContainer={{
              width: 55,
              borderRadius: 4,
            }}
            chipText={{
              fontFamily: fonts.semiBold,
              fontSize: 14,
            }}
          />
        )}
      />
    </>
  );
};

const Agenda: React.FC<AgendaProps> = ({ route }) => {
  const navigation = useNavigation();

  const [selectedDog, setSelectedDog] = useState<Dogs>("invalid");

  const values = {
    invalid: "00,00",
    Chico: "50,00",
    Bento: "70,00",
    Mary: "50,00",
  };

  const dogs: Dogs[] = ["Chico", "Bento", "Mary"];

  const data = route.params;

  const handlePetChange = (itemValue: Dogs) => {
    if (itemValue === "invalid") return;
    setSelectedDog(itemValue);
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
        <Text style={styles.title}>Escolha o horário</Text>
        <TimeList />
        <Text style={styles.title}>Escolha o Pet</Text>
        <View style={styles.selectContainer}>
          <Picker
            selectedValue={selectedDog}
            onValueChange={handlePetChange}
            style={styles.select}
            prompt="Pets"
            mode="dropdown"
          >
            <Picker.Item
              label="Selecione um Pet"
              value="invalid"
              key="invalid"
              style={{
                color: colors.greyTab,
              }}
            />
            {dogs.map((dog, index) => (
              <Picker.Item label={dog} value={dog} key={index} />
            ))}
          </Picker>
        </View>
        <Text style={styles.title}>Valor</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>R$ {values[selectedDog]}</Text>
        </View>
        <ActionButton
          color={colors.green}
          title="Agendar"
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("AgendaComplete")}
        />
      </View>
    </ScrollView>
  );
};

export { Agenda };
