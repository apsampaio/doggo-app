import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    aspectRatio: 2,
  },

  title: {
    fontFamily: fonts.semiBold,
    color: colors.lightBlack,
    fontSize: 20,
    marginBottom: 16,
  },
});

export { styles };
