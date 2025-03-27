import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ptBR } from "@mui/x-date-pickers/locales";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import moment from "moment/min/moment-with-locales";
import "moment/locale/pt-br";
import { ThemeProviderTest } from "../Styles/ThemeProvider";

export default function BasicDateCalendar() {
  moment.locale("pt-br");

  return (
    <ThemeProviderTest>
      <LocalizationProvider
        dateAdapter={AdapterMoment}
        adapterLocale="ptBR"
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </LocalizationProvider>
    </ThemeProviderTest>
  );
}
