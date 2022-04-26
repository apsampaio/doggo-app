import React, { useState } from "react";
import { Calendar, LocaleConfig, DateData } from "react-native-calendars";
import { format, lastDayOfMonth, setDate } from "date-fns";

import { colors } from "../../global/colors";

import sCalendar from "./style";
import { fonts } from "../../global/fonts";

type MarkedProps = {
  [day: string]: {
    selected: boolean;
    selectedColor: string;
    customStyles: { container: object };
    [key: string]: any;
  };
};

const CalendarComponent: React.FC = () => {
  const [days, setDays] = useState<MarkedProps>({});
  const [todayDate, setTodayDate] = useState(() => {
    return format(new Date(), "yyyy-MM-dd");
  });

  const handleDate = {
    minDate: () => {
      // FIXME To Decide between month or current date
      return todayDate;
      // return format(new Date(), "yyyy-MM-01");
    },
    maxDate: () => {
      return format(lastDayOfMonth(new Date()), "yyyy-MM-dd");
    },
    today: () => {},
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
        onDayPress={({ dateString }) =>
          setDays({
            [dateString]: {
              selected: true,
              selectedColor: colors.orange,
              customStyles: { container: sCalendar.day },
              customTextStyle: {
                fontFamily: fonts.regular,
                color: colors.black,
              },
            },
          })
        }
        markedDates={days}
        disableAllTouchEventsForDisabledDays
        theme={{
          "stylesheet.calendar.header": {
            week: sCalendar.week,
          },
          weekVerticalMargin: 2,
          calendarBackground: colors.white,

          textSectionTitleColor: colors.black,
          todayTextColor: colors.black,
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
