import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ptBR as corePeBR } from '@mui/material/locale';
import { ptBR } from '@mui/x-date-pickers/locales';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  ptBR, // x-date-pickers translations
  corePeBR, // core translations
);

export function ThemeProviderTest({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}