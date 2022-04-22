import { StyleSheet, Dimensions } from "react-native";
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
    paddingTop: 40,
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

const headerStyles = StyleSheet.create({
  container: {
    height: 180,
    width: Dimensions.get("screen").width - 16,
    backgroundColor: "#FFF",
    borderRadius: 4,

    marginTop: -80,

    alignSelf: "center",
  },

  titles: {
    flex: 3,
    alignItems: "center",
  },

  title: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.black,

    marginLeft: 16,
    marginTop: 16,
  },

  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.darkGrey,

    marginLeft: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },

  rating: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  ratingTitle: {
    fontWeight: "700",
    fontSize: 12,
    color: colors.black,
    marginBottom: 4,
  },

  starContainer: {
    flexDirection: "row",
  },
});

export { styles, headerStyles };
