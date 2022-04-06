import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
  },

  header: {
    height: 156,
    width: "100%",
    backgroundColor: colors.purple,

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 56,
  },

  title: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: colors.black,

    marginTop: 45,
    marginBottom: 20,
  },

  textSimple: {
    fontFamily: fonts.regular,
    color: colors.purple,
    fontSize: 16,
    height: 24,
  },
});

export { styles };
