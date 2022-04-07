import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 2000,
    backgroundColor: colors.white,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },

  smallCircle: {
    width: 8,
    height: 8,
    borderRadius: 2000,
    backgroundColor: colors.white,

    marginHorizontal: 4,
  },
});

export { styles };
