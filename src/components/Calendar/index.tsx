import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Calendar, LocaleConfig, DateData } from "react-native-calendars";

import { format, lastDayOfMonth } from "date-fns";

import { colors } from "../../global/colors";

import sCalendar from "./style";

type DayProps = {
  state?: "selected" | "disabled" | "inactive" | "today" | "";
  day?: DateData;
  selected: number;
};

const DayComponent: React.FC<DayProps> = ({ state, day, selected }) => {
  console.log("render", day?.day, Date.now());

  const backgroundColor = state === "disabled" ? colors.white : colors.purple;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        sCalendar.day,
        {
          backgroundColor:
            selected === day?.day ? colors.orange : backgroundColor,
        },
      ]}
    >
      <Text
        style={[
          sCalendar.dayText,
          {
            color: state === "disabled" ? colors.darkGrey : "#FFF",
          },
        ]}
      >
        {day?.day}
      </Text>
    </TouchableOpacity>
  );
};

const CalendarComponent: React.FC = () => {
  const [todayDate, setTodayDate] = useState(() => {
    return format(new Date(), "yyyy-MM-dd");
  });

  const [selected, setSelected] = useState(0);

  const handleSelectDate = (day: number) => {
    setSelected(day);
  };

  const handleDate = {
    minDate: () => {
      // FIXME To Decide between month or current date
      // return todayDate;
      return format(new Date(), "yyyy-MM-01");
    },
    maxDate: () => {
      return format(lastDayOfMonth(new Date()), "yyyy-MM-dd");
    },
  };

  LocaleConfig.locales["pt"] = {
    today: "Hoje",
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
    dayNames: ["D", "S", "T", "Q", "Q", "S", "S"],
  };

  LocaleConfig.defaultLocale = "pt";

  return (
    <>
      <Calendar
        minDate={handleDate.minDate()}
        maxDate={handleDate.maxDate()}
        markingType={"custom"}
        hideArrows={true}
        disableMonthChange={true}
        dayComponent={({ date, state }) => (
          <DayComponent day={date} state={state} selected={selected} />
        )}
        theme={{
          "stylesheet.calendar.header": {
            week: sCalendar.week,
          },
          weekVerticalMargin: 2,
          calendarBackground: colors.white,
          textSectionTitleColor: colors.black,
          todayTextColor: colors.white,
          dayTextColor: colors.black,
          monthTextColor: colors.black,
          textDisabledColor: colors.grey,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </>
  );
};

export { CalendarComponent };
