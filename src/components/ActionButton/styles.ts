import { StyleSheet } from "react-native";

import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "80%",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,

    marginBottom: 8,
  },

  title: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
});

export { styles };
