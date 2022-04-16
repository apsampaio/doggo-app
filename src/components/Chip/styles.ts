import { StyleSheet } from "react-native";

import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,

    alignItems: "center",
    justifyContent: "center",
    
    marginRight: 8
  },

  title: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.grey,
  },
});

export { styles };
