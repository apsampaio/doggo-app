import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    height: 178,
    width: Dimensions.get("screen").width - 16,
    backgroundColor: "#FFF",
    borderRadius: 4,
    marginBottom: 8,

    alignSelf: "center",
  },

  background: {
    width: "100%",
    height: 80,
  },

  body: {
    flexDirection: "row",
    flex: 1,
  },

  titles: {
    flex: 3,
  },

  rating: {
    flex: 1,

    alignItems: "flex-end",
    justifyContent: "flex-end",

    padding: 8,
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
});

export { styles };
