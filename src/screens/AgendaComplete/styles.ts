import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    paddingHorizontal: 16,

    alignItems: "center",
    justifyContent: "center",
  },

  icon: {},

  title: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 28,

    textAlign: "center",
    marginVertical: 32,
  },

  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,

    textAlign: "center",

    marginBottom: 16,
  },

  yellow: {
    color: colors.yellow,
    fontFamily: fonts.regular,
    fontSize: 16,
  },

  button: {
    position: "absolute",
    bottom: 16,
  },
});
