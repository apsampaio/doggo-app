import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../global/colors";

const sCalendar = StyleSheet.create({
  day: {
    width: Dimensions.get("window").width / 7 - 8,
    height: 48,
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
  },

  dayText: {
    fontSize: 16,
  },

  container: {
    paddingHorizontal: 16,
  },

  week: {
    marginTop: 0,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  todayDateText: {
    marginBottom: 5,
    color: colors.black,
  },
});

export default sCalendar;
