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

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",

    paddingTop: 32,
    paddingHorizontal: 16,
  },

  titleContainer: {
    flexDirection: "row",
  },

  title: {
    fontFamily: fonts.bold,
    fontSize: 48,
    height: 72,
    color: colors.white,
  },

  yellow: {
    fontFamily: fonts.bold,
    fontSize: 48,
    height: 72,
    color: colors.yellow,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "flex-start",
  },

  textSimple: {
    fontFamily: fonts.regular,
    color: colors.orange,
    fontSize: 16,

    paddingLeft: 8,
    height: 20,
  },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 56,
  },
});

export { styles };
