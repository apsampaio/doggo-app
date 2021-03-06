import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  header: {
    height: 156,
    width: "100%",
    backgroundColor: colors.purple,

    alignItems: "flex-start",
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flex: 1,
  },

  title: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: colors.black,

    marginTop: 45,
    marginBottom: 20,

    alignSelf: "flex-start",
  },

  textSimple: {
    fontFamily: fonts.regular,
    color: colors.purple,
    fontSize: 16,
    height: 24,
  },
});

export { styles };
