import { StyleSheet } from "react-native";

import { colors } from "../../global/colors";
import { fonts } from "../../global/fonts";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    borderColor: colors.grayTab,
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
    padding: 0,
    fontFamily: fonts.regular,
  },
});

export { styles };
