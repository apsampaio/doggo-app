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
    paddingBottom: 16,
  },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flex: 1,
  },

  search: {
    flexDirection: "row",
  },

  title: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: colors.black,

    marginTop: 45,
    marginBottom: 20,

    alignSelf: "flex-start",
  },

  button: {
    width: "auto",
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width - 32,
    height: 260,
    backgroundColor: colors.borderGrey,
  },

  mapBox: {
    width: "100%",
    height: 80,
    backgroundColor: colors.borderGrey,

    borderTopWidth: 1,
    borderColor: colors.greyTab,

    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export { styles };
