import { StyleSheet } from "react-native";

import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    borderColor: colors.borderGrey,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginBottom: 4,
  },

  icon: {
    marginLeft: 16,
    paddingRight: 16,
  },

  secret: {
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    margin: 0,
    paddingTop: 4,
    fontFamily: fonts.regular,
  },
});

export { styles };
