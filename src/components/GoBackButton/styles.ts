import { StyleSheet } from "react-native";

import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    height: 24,
  },

  title: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 16,
    marginLeft: 8,
  },
});

export { styles };
