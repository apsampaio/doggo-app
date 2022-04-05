import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    paddingBottom: 120,
  },

  header: {
    height: 156,
    width: "100%",
    backgroundColor: colors.purple,
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
  },

  bottomButton: {
    position: "absolute",
    left: 0,
    bottom: 8,
    right: 0,

    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
});

export { styles };
